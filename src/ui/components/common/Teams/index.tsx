// Hooks e React
import { memo, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks personalizado
import useLanguage from 'data/hooks/useLanguage';

// Estilos personalizados
import {
	StyledButtonMore,
	StyledColumnsHeaderTeam,
	StyledColumnsTeams,
	StyledContainerAboutTeam,
	StyledContainerTeam,
	StyledContainerVideo,
	StyledGridTeams,
	StyledListAboutTeams,
	StyledListItem,
	StyledSection,
	StyledWrapperParagraph
} from './Teams';

// Componentes personalizados
import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';
import Select from '../Select';

// Interfaces
import { ICreditsResult } from 'data/interfaces/Credits';
import { IVideo } from 'data/interfaces/Video';

// Caminhos para imagens
const IMAGE = process.env.REACT_APP_IMG_ORIGINAL;
const IMAGE_PUBLIC = process.env.PUBLIC_URL;
const NO_PICTURE = '/assets/images/no-profile-picture.png';

// Arquivo json lista de texto traduzidos
import languages from './translation.json';
import teams from './teams.json';

interface ITeams {
	videos?: IVideo[];
	credits?: ICreditsResult;
}


const Teams = ({ videos, credits }: ITeams) => {
	const { language } = useLanguage();
	const [selectedCredits, setSelectedCredits] = useState('cast');

	const getVideos = useMemo(() => {
		return videos?.find(video => video.type === 'Trailer');
	}, [videos]);

	const selectTypeOfCredits = useMemo(() => {
		if (selectedCredits === 'cast') {
			return credits?.cast.slice(0, 5);
		}
		if (selectedCredits === 'crew') {
			return credits?.crew.slice(0, 5);
		}
	}, [credits?.cast, credits?.crew, selectedCredits]);

	const translation = useMemo(() => {
		return languages.teams.find(item => item.code === language);
	}, [language]);

	const team = useMemo(() => {
		return teams.language.find(team => team.code === language);
	}, [language]);


	return (
		<StyledSection>
			<StyledContainerAboutTeam>
				<StyledGridTeams>
					<StyledColumnsTeams>
						<Heading component='h2' variant='subtitle'>
							{translation?.video}
						</Heading>

						<StyledContainerVideo>
							<iframe
								width="100%"
								height="100%"
								src={`https://www.youtube.com/embed/${getVideos?.key}`}
								title={getVideos?.name}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</StyledContainerVideo>
					</StyledColumnsTeams>

					<StyledColumnsTeams>
						<StyledColumnsHeaderTeam>
							<Heading component='h2' variant='subtitle'>
								{translation?.team}
							</Heading>

							<Select
								state={team?.list_team}
								setState={setSelectedCredits}
								defaultValue={team?.list_team[0].name}
								position="absolute"
							/>
						</StyledColumnsHeaderTeam>

						<StyledListAboutTeams>
							{selectTypeOfCredits?.map((cast) => (
								<StyledListItem key={`${cast.id}-${cast.credit_id}`}>
									<Link to={'#'}
										id={`team-${cast.credit_id}`}
									>
										<StyledContainerTeam>
											<img
												src={cast?.profile_path
													? `${IMAGE}${cast?.profile_path}`
													: `${IMAGE_PUBLIC}${NO_PICTURE}`}
												alt={cast.name}
											/>
										</StyledContainerTeam>
									</Link>
									<StyledWrapperParagraph>
										<Paragraph size='md' aria-labelledby={`team-${cast.credit_id}`}>
											{cast.name}
										</Paragraph>
										<Paragraph size='sm' color='secondary'>
											{cast.known_for_department}
										</Paragraph>
									</StyledWrapperParagraph>
								</StyledListItem>
							))}
						</StyledListAboutTeams>

					</StyledColumnsTeams>
				</StyledGridTeams>

				<StyledButtonMore>
					{translation?.more}
				</StyledButtonMore>

			</StyledContainerAboutTeam>

		</StyledSection >
	);
};

export default memo(Teams);