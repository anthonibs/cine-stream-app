// Hooks e React
import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Hooks personalizado
import useLanguage from 'data/hooks/useLanguage';

// Estilos personalizados
import * as S from './Teams';

// Componentes personalizados
import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';
import Select from '../Select';
import SkeletonCustom from '../SkeletonCustom';

import { removeAccentsFromText } from 'utils';

// Interfaces
import { ICreditsResult, IVideo } from 'data/interfaces';

// Arquivo json lista de texto traduzidos
import languages from './translation.json';
import teams from './teams.json';

// Caminhos para imagens
const IMAGE = process.env.REACT_APP_IMG_ORIGINAL;
const IMAGE_PUBLIC = process.env.PUBLIC_URL;
const NO_PICTURE = '/assets/images/no-profile-picture.png';

interface ITeams {
	videos?: IVideo[];
	isLoadingVideo?: boolean;
	credits?: ICreditsResult;
	isLoadingCredits?: boolean;
}

const Teams = ({ videos, isLoadingVideo, credits, isLoadingCredits }: ITeams) => {
	const { language } = useLanguage();
	const { state } = useLocation();

	const [selectedCredits, setSelectedCredits] = useState('cast');

	const getVideos = useMemo(() => {
		return videos?.find((video) => video.type === 'Trailer');
	}, [videos]);

	const selectTypeOfCredits = useMemo(() => {
		if (selectedCredits === 'cast') {
			return credits?.cast.slice(0, 5);
		}
		if (selectedCredits === 'crew') {
			return credits?.crew.slice(0, 5);
		}
		if (selectedCredits === '') {
			return credits?.cast.slice(0, 5);
		}
	}, [credits?.cast, credits?.crew, selectedCredits]);

	const translation = useMemo(() => {
		return languages.teams.find((item) => item.code === language);
	}, [language]);

	const team = useMemo(() => {
		return teams.language.find((team) => team.code === language);
	}, [language]);

	return (
		<S.Section>
			<S.ContainerAboutTeam>
				<S.GridTeams>
					<S.ColumnsTeams>
						<Heading component='h2' variant='subtitle'>
							{translation?.video}
						</Heading>

						{!isLoadingVideo ? (
							<S.ContainerVideo>
								<iframe
									width='100%'
									height='100%'
									src={`https://www.youtube.com/embed/${getVideos?.key}`}
									title={getVideos?.name}
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									loading='lazy'
								/>
							</S.ContainerVideo>
						) : (
							<S.ContainerVideo>
								<SkeletonCustom count={1} height={175} />
							</S.ContainerVideo>
						)}
					</S.ColumnsTeams>

					<S.ColumnsTeams>
						<S.ColumnsHeaderTeam>
							<Heading component='h2' variant='subtitle'>
								{translation?.team}
							</Heading>

							<Select
								state={team?.list_team}
								setState={setSelectedCredits}
								defaultValue={team?.list_team[0].name}
								position='absolute'
							/>
						</S.ColumnsHeaderTeam>

						<S.ListAboutTeams>
							{!isLoadingCredits
								? selectTypeOfCredits?.map((cast) => (
										<S.ListItem key={`${cast.id}-${cast.credit_id}`}>
											<Link
												to={`/browser/people/${cast.id}-${removeAccentsFromText(cast.name)}`}
												id={`team-${cast.credit_id}`}
												state={cast.id}
											>
												<S.ContainerTeam>
													<img
														src={
															cast?.profile_path
																? `${IMAGE}${cast?.profile_path}`
																: `${IMAGE_PUBLIC}${NO_PICTURE}`
														}
														loading='lazy'
														alt={cast.name}
													/>
												</S.ContainerTeam>
											</Link>
											<S.WrapperParagraph>
												<Paragraph size='md' aria-labelledby={`team-${cast.credit_id}`}>
													{cast.name}
												</Paragraph>
												<Paragraph size='sm' color='secondary'>
													{cast.known_for_department}
												</Paragraph>
											</S.WrapperParagraph>
										</S.ListItem>
								  ))
								: Array(5)
										.fill(5)
										.map((_, index) => (
											<S.ListItem key={index}>
												<SkeletonCustom count={1} height={150} style={{ marginBottom: '3px' }} />
												<SkeletonCustom count={1} height={15} />
												<SkeletonCustom count={1} width={100} height={15} />
											</S.ListItem>
										))}
						</S.ListAboutTeams>
					</S.ColumnsTeams>
				</S.GridTeams>

				<Link to={`/browser/${state}/cast/${credits?.id}`}>
					<S.More>{translation?.more}</S.More>
				</Link>
			</S.ContainerAboutTeam>
		</S.Section>
	);
};

export default Teams;
