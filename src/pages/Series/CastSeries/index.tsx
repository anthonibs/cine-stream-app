import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import useLanguage from 'data/hooks/useLanguage';

import SeriesServer from 'data/services/SeriesServer';
import CreditsServer from 'data/services/CreditsServer';

import { ICreditsResult, ITvMovieDetails } from 'data/interfaces';

import Heading from 'ui/components/common/Typography/Heading';
import SkeletonCustom from 'ui/components/common/SkeletonCustom';

import { removeAccentsFromText } from 'utils';

import { BsArrowReturnLeft } from 'react-icons/bs';

import {
	StyledCastNumber,
	StyledColumnLayout,
	StyledContent,
	StyledDepartmentCategory,
	StyledGoBackButton,
	StyledHeader,
	StyledHeaderWrapper,
	StyledImage,
	StyledImageInfo,
	StyledInformation,
	StyledList,
	StyledListItem,
	StyledSectionContainer,
	StyledTitle,
	StyledWrapper
} from './CastSeries';

const IMAGE = process.env.REACT_APP_IMG;
const PUBLIC = process.env.PUBLIC_URL;
const IMAGE_BACKGROUND = 'assets/images/not-picture.png';


const CastSeries = () => {
	const { language } = useLanguage();
	const { id } = useParams();
	const navigate = useNavigate();

	const [tvMovie, setTvMovie] = useState<ITvMovieDetails>();
	const [credits, setCredits] = useState<ICreditsResult>();

	const [isLoadingTvMovie, setIsLoadingTvMovie] = useState(true);
	const [isLoadingCredits, setIsLoadingCredits] = useState(true);


	const loaderSerie = useCallback(async () => {
		try {
			setIsLoadingTvMovie(true);
			const data = await SeriesServer.getDetails<ITvMovieDetails>(Number(id), language);
			setTvMovie(data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoadingTvMovie(false);
		}
	}, [id, language]);


	const loaderCast = useCallback(async () => {
		try {
			setIsLoadingCredits(true);
			const data = await CreditsServer.getCreditsAll<ICreditsResult>('tv', Number(id), language);
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
		loaderSerie();
	}, [loaderSerie, loaderCast]);


	return (
		<StyledSectionContainer>
			<StyledHeader>
				<StyledHeaderWrapper>
					<StyledImage>
						{!isLoadingTvMovie
							? <img src={`${IMAGE}${tvMovie?.poster_path}`} alt={`Poster of film ${tvMovie?.name}`} />
							: <SkeletonCustom height={80} />
						}
					</StyledImage>
					<StyledWrapper>
						{!isLoadingTvMovie
							? <>
								<StyledTitle>
									{tvMovie?.name} <span>({tvMovie?.last_air_date.slice(0, 4)})</span>
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
						{
							credits?.cast.length
								? <StyledColumnLayout>
									<Heading
										variant='h5'
										component='h2'
										color='third'
									>
										Elenco da série
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
								: null
						}

						{credits?.crew.length
							? <StyledColumnLayout>
								<Heading
									variant='h5'
									component='h2'
									color='third'
								>
									Equipe da Série
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
							</StyledColumnLayout> : null}
					</>
					: <div style={{ margin: '0 auto', paddingTop: '3rem', fontSize: '1.3rem' }}>Carregando...</div>}
			</StyledContent>
		</StyledSectionContainer>
	);
};


export default CastSeries;