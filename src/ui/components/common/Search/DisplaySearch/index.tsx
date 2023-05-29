import { Link } from 'react-router-dom';

import {
	StyledBox,
	StyledImage,
	StyledImageContainer,
	StyledItem,
	StyledItems,
	StyledSubtitle
} from './DisplaySearch';

import { IMovie, ITotalPerson } from 'data/interfaces';

import Heading from '../../Typography/Heading';
import Paragraph from '../../Typography/Paragraph';

import { removeAccentsFromText } from 'utils';

const IMAGE = process.env.REACT_APP_IMG;
const PUBLIC = process.env.PUBLIC_URL;
const IMAGE_BACKGROUND = 'assets/images/not-picture.png';


interface IDisplaySearch {
	data: ITotalPerson[] | IMovie[];
	handlerClosed: () => void;
}


const DisplaySearch = ({ data, handlerClosed }: IDisplaySearch) => {
	function getRoutePath(path: string) {
		switch (path) {
		case 'movie':
			return 'films';
		case 'tv':
			return 'series';
		case 'person':
			return 'person';
		default:
			return null;
		}
	}


	return (
		<StyledItems>
			{
				data.slice(0, 8).map((item) => {
					if ('name' in item) {
						return <StyledItem key={item.id}>
							<Link
								to={`/browser/${getRoutePath(item.media_type)}/${item.id}-${removeAccentsFromText(item.name)}`}
								onClick={handlerClosed}
							>
								<StyledImageContainer>
									<StyledImage
										src={item.poster_path || item.profile_path ? `${IMAGE}${item.poster_path || item.profile_path}` : `${PUBLIC}/${IMAGE_BACKGROUND}`}
										alt={item.name}
									/>
								</StyledImageContainer>
							</Link>
							<StyledBox>
								<Link
									to={`/browser/${getRoutePath(item.media_type)}/${item.id}-${removeAccentsFromText(item.name)}`}
									onClick={handlerClosed}
								>
									<Heading
										component='h2'
										variant='subtitle'
										color='primary'
									>
										{item.name}
									</Heading>
								</Link>
								<StyledSubtitle>
									{item.first_air_date || item.known_for_department}
								</StyledSubtitle>
								<Paragraph
									size='xsm'
									color='secondary'
								>
									{item.overview}
								</Paragraph>
							</StyledBox>
						</StyledItem>;
					}

					if ('title' in item) {
						return <StyledItem key={item.id}>
							<Link
								to={`/browser/${getRoutePath(item.media_type)}/${item.id}-${removeAccentsFromText(item.title)}`}
								onClick={handlerClosed}
							>
								<StyledImageContainer>
									<StyledImage
										src={item.poster_path ? `${IMAGE}${item.poster_path}` : `${PUBLIC}/${IMAGE_BACKGROUND}`}
										alt={item.title}
									/>
								</StyledImageContainer>
							</Link>

							<StyledBox>
								<Link
									to={`/browser/${getRoutePath(item.media_type)}/${item.id}-${removeAccentsFromText(item.title)}`}
									onClick={handlerClosed}
								>
									<Heading
										component='h2'
										variant='subtitle'
										color='primary'
									>
										{item.title}
									</Heading>
								</Link>
								<StyledSubtitle>
									{item.release_date}
								</StyledSubtitle>
								<Paragraph
									size='xsm'
									color='secondary'
								>
									{item.overview}
								</Paragraph>
							</StyledBox>
						</StyledItem>;
					}
				})
			}
		</StyledItems>
	);
};

export default DisplaySearch;