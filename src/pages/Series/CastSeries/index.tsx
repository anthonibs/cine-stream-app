import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import useLanguage from 'data/hooks/useLanguage';

import SeriesServer from 'data/services/SeriesServer';
import CreditsServer from 'data/services/CreditsServer';

import { ICreditsResult, ITvMovieDetails } from 'data/interfaces';

import Heading from 'ui/components/common/Typography/Heading';
import SkeletonCustom from 'ui/components/common/SkeletonCustom';
import Head from 'ui/components/common/Head';

import { removeAccentsFromText } from 'utils';
import languages from './translate.json';

import { BsArrowReturnLeft } from 'react-icons/bs';

import * as S from './CastSeries';

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

	const getDepartmentNames = credits?.crew.map((crew) => crew.department);
	const technicalTeam = [...new Set(getDepartmentNames)];

	const translate = useMemo(() => {
		return languages.translation.find((item) => item.code === language);
	}, [language]);

	useEffect(() => {
		loaderCast();
		loaderSerie();
	}, [loaderSerie, loaderCast]);

	return (
		<S.SectionContainer>
			<Head title={translate?.series_cast || ''} />

			<S.Header>
				<S.HeaderWrapper>
					<S.Image>
						{!isLoadingTvMovie ? (
							<img
								src={`${IMAGE}${tvMovie?.poster_path}`}
								alt={`Poster of film ${tvMovie?.name}`}
								loading='lazy'
								decoding='async'
							/>
						) : (
							<SkeletonCustom height={80} />
						)}
					</S.Image>
					<S.Wrapper>
						{!isLoadingTvMovie ? (
							<>
								<S.Title>
									{tvMovie?.name} <span>({tvMovie?.last_air_date.slice(0, 4)})</span>
								</S.Title>
								<S.GoBackButton onClick={() => navigate(-1)}>
									<BsArrowReturnLeft />
									{translate?.back_to_start}
								</S.GoBackButton>
							</>
						) : (
							<>
								<SkeletonCustom height={20} count={1} width={300} />
								<SkeletonCustom height={20} count={1} width={180} />
							</>
						)}
					</S.Wrapper>
				</S.HeaderWrapper>
			</S.Header>

			<S.Content>
				{!isLoadingCredits ? (
					<>
						{credits?.cast.length ? (
							<S.ColumnLayout>
								<Heading variant='h5' component='h2' color='third'>
									{translate?.series_cast}
									<S.CastNumber>{credits?.cast.length}</S.CastNumber>
								</Heading>

								<S.List>
									{credits?.cast.map((cast) => (
										<S.ListItem key={cast.id}>
											<Link to={`/browser/people/${cast.id}-${removeAccentsFromText(cast.name)}`}>
												<S.ImageInfo>
													<img
														src={
															cast.profile_path
																? `${IMAGE}${cast.profile_path}`
																: `${PUBLIC}/${IMAGE_BACKGROUND}`
														}
														alt={`${cast.name}`}
														loading='lazy'
														decoding='async'
													/>
												</S.ImageInfo>
											</Link>
											<S.Information>
												<Link to={`/browser/people/${cast.id}-${removeAccentsFromText(cast.name)}`}>
													<h4>{cast.name}</h4>
												</Link>
												<p>{cast.character}</p>
											</S.Information>
										</S.ListItem>
									))}
								</S.List>
							</S.ColumnLayout>
						) : null}

						{credits?.crew.length ? (
							<S.ColumnLayout>
								<Heading variant='h5' component='h2' color='third'>
									{translate?.series_team}
									<S.CastNumber>{credits?.crew.length}</S.CastNumber>
								</Heading>

								{technicalTeam.sort().map((crewTeam) => (
									<S.DepartmentCategory key={crewTeam}>
										<header>
											<Heading variant='subtitle' component='h3' color='third'>
												{crewTeam}
											</Heading>
										</header>

										<S.List>
											{credits?.crew.map(
												(crew) =>
													crew.department === crewTeam && (
														<S.ListItem key={`${crew.id}-${crew.job}`}>
															<Link
																to={`/browser/people/${crew.id}-${removeAccentsFromText(
																	crew.name
																)}`}
															>
																<S.ImageInfo>
																	<img
																		src={
																			crew.profile_path
																				? `${IMAGE}${crew.profile_path}`
																				: `${PUBLIC}/${IMAGE_BACKGROUND}`
																		}
																		alt={`${crew.name}`}
																		loading='lazy'
																		decoding='async'
																	/>
																</S.ImageInfo>
															</Link>
															<S.Information>
																<Link
																	to={`/browser/people/${crew.id}-${removeAccentsFromText(
																		crew.name
																	)}`}
																>
																	<h4>{crew.name}</h4>
																</Link>
																<p>{crew.job}</p>
															</S.Information>
														</S.ListItem>
													)
											)}
										</S.List>
									</S.DepartmentCategory>
								))}
							</S.ColumnLayout>
						) : null}
					</>
				) : (
					<div style={{ margin: '0 auto', paddingTop: '3rem', fontSize: '1.3rem' }}>
						{translate?.loading}
					</div>
				)}
			</S.Content>
		</S.SectionContainer>
	);
};

export default CastSeries;
