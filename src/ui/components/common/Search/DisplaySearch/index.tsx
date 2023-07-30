import { Link } from 'react-router-dom';

import * as S from './DisplaySearch';

import { IMovie, ITotalPerson } from 'data/interfaces';

import Heading from '../../Typography/Heading';
import Paragraph from '../../Typography/Paragraph';

import { removeAccentsFromText } from 'utils';
import SkeletonCustom from '../../SkeletonCustom';

const IMAGE = process.env.REACT_APP_IMG;
const PUBLIC = process.env.PUBLIC_URL;
const IMAGE_BACKGROUND = 'assets/images/not-picture.png';

interface DisplaySearchProps {
	data: ITotalPerson[] | IMovie[];
	loader: boolean;
	handlerClosed: () => void;
}

const DisplaySearch = ({ data, loader, handlerClosed }: DisplaySearchProps) => {
	function getRoutePath(path: string) {
		switch (path) {
			case 'movie':
				return 'films';
			case 'tv':
				return 'series';
			case 'person':
				return 'people';
			default:
				return null;
		}
	}

	return (
		<S.ListItems>
			{!loader && data.length ? (
				data.slice(0, 9).map((item) => {
					const typeName = 'name' in item ? item.name : item.title;

					const removeAccents = removeAccentsFromText(typeName);
					const linkPath = `/browser/${getRoutePath(item.media_type)}/${item.id}-${removeAccents}`;

					const typeDate = 'name' in item ? item.first_air_date : item.release_date;
					const typDepartment = 'name' in item && item.known_for_department;
					const imagePath = 'name' in item ? item.profile_path : item.poster_path;

					return (
						<S.Item key={item.id}>
							<Link to={linkPath} onClick={handlerClosed}>
								<S.ImageContainer>
									<S.Image
										src={
											imagePath || item.backdrop_path
												? `${IMAGE}${imagePath || item.backdrop_path}`
												: `${PUBLIC}/${IMAGE_BACKGROUND}`
										}
										alt={typeName}
										loading='lazy'
										decoding='async'
									/>
								</S.ImageContainer>
							</Link>

							<S.Box>
								<Link to={linkPath} onClick={handlerClosed}>
									<Heading component='h2' variant='subtitle' color='primary'>
										{typeName}
									</Heading>
								</Link>
								<S.Subtitle>{typeDate || typDepartment}</S.Subtitle>
								<Paragraph size='xsm' color='secondary'>
									{item.overview}
								</Paragraph>
							</S.Box>
						</S.Item>
					);
				})
			) : !loader && data.length === 0 ? (
				<div className='message-error'>
					<p>Esse título não foi encontrado! 😅</p>
				</div>
			) : (
				Array(9)
					.fill(9)
					.map((_, index) => (
						<div key={index} className='pre-loader'>
							<div>
								<SkeletonCustom height={130} width={100} />
							</div>

							<div>
								<SkeletonCustom height={20} width={'65%'} />
								<SkeletonCustom width={'30%'} />
								<SkeletonCustom width={'90%'} count={3} />
							</div>
						</div>
					))
			)}
		</S.ListItems>
	);
};

export default DisplaySearch;
