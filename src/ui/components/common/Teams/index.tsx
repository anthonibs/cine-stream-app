import { memo, useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

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

import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';

import { ICreditsResult } from 'data/interfaces/Credits';
import { IVideo } from 'data/interfaces/Video';

const IMAGE = process.env.REACT_APP_IMG_ORIGINAL;
const IMAGE_PUBLIC = process.env.PUBLIC_URL;
const NO_PICTURE = '/assets/images/no-profile-picture.png';

interface ITeams {
	videos?: IVideo[];
	credits?: ICreditsResult;
}

import languages from './translation.json';
import useLanguage from 'data/hooks/useLanguage';


const Teams = ({ videos, credits }: ITeams) => {

	const { language } = useLanguage();

	const [selectedCredits, setSelectedCredits] = useState('cast');

	const handleSelectedTeams = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCredits(e.target.value);
	}, []);


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

							<select onChange={handleSelectedTeams}>
								<option value="cast">Cast</option>
								<option value="crew">Crew</option>
							</select>
						</StyledColumnsHeaderTeam>

						<StyledListAboutTeams>
							{selectTypeOfCredits?.map((cast) => (
								<StyledListItem key={`${cast.id}-${cast.credit_id}`}>
									<Link to={'#'}>
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
										<Paragraph size='md'>
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