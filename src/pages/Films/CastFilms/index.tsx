import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import useLanguage from 'data/hooks/useLanguage';

import FilmsServer from 'data/services/FilmsServer';
import CreditsServer from 'data/services/CreditsServer';

import { ICreditsResult, IMoveDetails } from 'data/interfaces';

import Heading from 'ui/components/common/Typography/Heading';
import SkeletonCustom from 'ui/components/common/SkeletonCustom';

import { removeAccentsFromText } from 'utils';

import { BsArrowReturnLeft } from 'react-icons/bs';

import {
	StyledColumnLayout,
	StyledDepartmentCategory,
	StyledImage,
	StyledImageInfo,
	StyledHeader,
	StyledHeaderWrapper,
	StyledListItem,
	StyledInformation,
	StyledTitle,
	StyledWrapper,
	StyledGoBackButton,
	StyledList,
	StyledCastNumber,
	StyledSectionContainer,
	StyledContent,
} from './CastFilms';


const IMAGE = process.env.REACT_APP_IMG;
const PUBLIC = process.env.PUBLIC_URL;
const IMAGE_BACKGROUND = 'assets/images/not-picture.png';


const CastFilms = () => {
	const { language } = useLanguage();
	const { id } = useParams();
	const navigate = useNavigate();

	const [films, setFilms] = useState<IMoveDetails>();
	const [credits, setCredits] = useState<ICreditsResult>();

	const [isLoadingFilms, setIsLoadingFilms] = useState(true);
	const [isLoadingCredits, setIsLoadingCredits] = useState(true);


	const loaderFilms = useCallback(async () => {
		try {
			setIsLoadingFilms(true);
			const data = await FilmsServer.getFilm<IMoveDetails>(Number(id), language);
			setFilms(data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoadingFilms(false);
		}
	}, [id, language]);


	const loaderCast = useCallback(async () => {
		try {
			setIsLoadingCredits(true);
			const data = await CreditsServer.getCreditsAll<ICreditsResult>('movie', Number(id), language);
			setCredits(data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoadingCredits(false);
		}
	}, [id, language]);


	const getDepartmentNames = credits?.crew.map(crew => crew.department);
	const technicalTeam = [...new Set(getDepartmentNames)];


	useEffect(() => {
		loaderCast();
		loaderFilms();
	}, [loaderFilms, loaderCast]);


	return (
		<StyledSectionContainer>
			<StyledHeader>
				<StyledHeaderWrapper>
					<StyledImage>
						{!isLoadingFilms
							? <img src={`${IMAGE}${films?.poster_path}`} alt={`Poster of film ${films?.title}`} />
							: <SkeletonCustom height={80} />
						}
					</StyledImage>
					<StyledWrapper>
						{!isLoadingFilms
							? <>
								<StyledTitle>
									{films?.title} <span>({films?.release_date.slice(0, 4)})</span>
								</StyledTitle>
								<StyledGoBackButton onClick={() => navigate(-1)}>
									<BsArrowReturnLeft />
									Voltar ao início
								</StyledGoBackButton>
							</>
							: <>
								<SkeletonCustom height={20} count={1} width={300} />
								<SkeletonCustom height={20} count={1} width={180} />
							</>}
					</StyledWrapper>
				</StyledHeaderWrapper>
			</StyledHeader>

			<StyledContent>
				{!isLoadingCredits
					? <>
						<StyledColumnLayout>
							<Heading
								variant='h5'
								component='h2'
								color='third'
							>
								Elenco
								<StyledCastNumber>{credits?.cast.length}</StyledCastNumber>
							</Heading>

							<StyledList>
								{credits?.cast.map((cast) => (
									<StyledListItem key={cast.id}>
										<Link to={`/browser/people/${cast.id}-${removeAccentsFromText(cast.name)}`}>
											<StyledImageInfo>
												<img src={cast.profile_path ? `${IMAGE}${cast.profile_path}` : `${PUBLIC}/${IMAGE_BACKGROUND}`}
													alt={`${cast.name}`}
												/>
											</StyledImageInfo>
										</Link>
										<StyledInformation>
											<Link to={`/browser/people/${cast.id}-${removeAccentsFromText(cast.name)}`}>
												<h4>{cast.name}</h4>
											</Link>
											<p>{cast.character}</p>
										</StyledInformation>
									</StyledListItem>
								))}
							</StyledList>
						</StyledColumnLayout>

						<StyledColumnLayout>
							<Heading
								variant='h5'
								component='h2'
								color='third'
							>
								Equipe
								<StyledCastNumber>{credits?.crew.length}</StyledCastNumber>
							</Heading>

							{technicalTeam.sort().map((crewTeam) => (
								<StyledDepartmentCategory key={crewTeam}>
									<header>
										<Heading variant='subtitle' component='h3' color='third' >
											{crewTeam}
										</Heading>
									</header>

									<StyledList>
										{credits?.crew.
											map((crew) => crew.department === crewTeam
												&&
												<StyledListItem key={`${crew.id}-${crew.job}`}>
													<Link to={`/browser/people/${crew.id}-${removeAccentsFromText(crew.name)}`}>
														<StyledImageInfo>
															<img
																src={crew.profile_path ? `${IMAGE}${crew.profile_path}` : `${PUBLIC}/${IMAGE_BACKGROUND}`}
																alt={`${crew.name}`}
															/>
														</StyledImageInfo>
													</Link>
													<StyledInformation>
														<Link to={`/browser/people/${crew.id}-${removeAccentsFromText(crew.name)}`}>
															<h4>{crew.name}</h4>
														</Link>
														<p>{crew.job}</p>
													</StyledInformation>
												</StyledListItem>
											)
										}
									</StyledList>
								</StyledDepartmentCategory>
							))}
						</StyledColumnLayout>
					</>
					: <div style={{ margin: '0 auto', paddingTop: '3rem', fontSize: '1.3rem' }}>Carregando...</div>}
			</StyledContent>
		</StyledSectionContainer>
	);
};


export default CastFilms;