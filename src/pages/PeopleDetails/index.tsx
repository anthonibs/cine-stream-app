import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import useLanguage from 'data/hooks/useLanguage';

import { FaImdb, FaInstagram, FaTwitter, FaWikipediaW } from 'react-icons/fa';

import DiscoverServer from 'data/services/DiscoverServer';
import PersonServer from 'data/services/PersonServer';

import Heading from 'ui/components/common/Typography/Heading';
import Paragraph from 'ui/components/common/Typography/Paragraph';
import KnowFor from './KnowFor';

import {
	StyledAside,
	StyledContainer,
	StyledContent,
	StyledDisplayContent,
	StyledGrid,
	StyledImageProfile,
	StyledInfoContent,
	StyledSocialNetworks,
} from './PeopleDetails';

import {
	IMediaSocial,
	IMovie,
	IPage,
	IPersonDetails
} from 'data/interfaces';

import { differenceBetweenDates } from 'utils';
import SkeletonCustom from 'ui/components/common/SkeletonCustom';

const IMAGE = process.env.REACT_APP_IMG;
const PUBLIC = process.env.PUBLIC_URL;
const IMAGE_BACKGROUND = 'assets/images/not-picture.png';

const genderGroup = [
	{
		code: 'pt-BR',
		genres: [
			{
				genre_id: 1,
				genre_name: 'Feminino'
			},
			{
				genre_id: 2,
				genre_name: 'Masculino'
			}
		]
	},
	{
		code: 'en-US',
		genres: [
			{
				genre_id: 1,
				genre_name: 'Female'
			},
			{
				genre_id: 2,
				genre_name: 'Male'
			}
		]
	}
];



const PeopleDetails = () => {
	const regex = /^[\d]+/g;
	const { id } = useParams();
	const { language } = useLanguage();
	const idPeople = Number(regex.exec(id!));

	const [person, setPerson] = useState({} as IPersonDetails);
	const [knowFor, setKnowFor] = useState<IMovie[]>([]);
	const [mediaSocial, setMediaSocial] = useState({} as IMediaSocial);

	const [isLoading, setIsLoading] = useState(true);
	const [isLoadingKnow, setIsLoadingKnow] = useState(true);


	const loaderPerson = useCallback(async () => {
		try {
			setIsLoading(true);
			const data = await PersonServer.getPerson<IPersonDetails>(idPeople, language);
			setPerson(data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}, [idPeople, language]);


	const loaderKnowFor = useCallback(async () => {
		try {
			setIsLoadingKnow(true);
			const data = await DiscoverServer.getDiscoverKnown<IPage<IMovie>>(idPeople, language);
			setKnowFor(data.results);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoadingKnow(false);
		}
	}, [idPeople, language]);


	// External IDs
	const loaderMediaSocial = useCallback(async () => {
		try {
			const data = await PersonServer.getMediaSocial<IMediaSocial>(idPeople);
			setMediaSocial(data);
		} catch (error) {
			console.error(error);
		}
	}, [idPeople]);


	function convertDataToLocation(date: string) {
		return new Date(date).toLocaleDateString(language);
	}

	function getGenreName(id: number) {
		const selectedLanguage = genderGroup.find((translate) => translate.code === language);
		const selectedGenre = selectedLanguage?.genres.find((genre) => genre.genre_id === id);
		return selectedGenre?.genre_name;
	}



	useEffect(() => {
		loaderPerson();
		loaderMediaSocial();
		loaderKnowFor();
	}, [loaderPerson, loaderMediaSocial, loaderKnowFor]);


	return (
		<StyledContainer>
			<StyledGrid>
				<StyledAside>
					<StyledImageProfile>
						{!isLoading
							? <img
								src={person?.profile_path
									? `${IMAGE}${person?.profile_path}`
									: `${PUBLIC}/${IMAGE_BACKGROUND}`}
								alt={person?.name}
								loading='lazy'
							/>
							: <SkeletonCustom count={1} height={400} borderRadius={10} />
						}
					</StyledImageProfile>

					<StyledSocialNetworks>
						{!isLoading ?
							mediaSocial.instagram_id &&
							<Link
								target={'_blank'}
								to={`https://www.instagram.com/${mediaSocial.instagram_id}`}
								aria-label='Instagram'
							>
								<FaInstagram className='icon-social' />
							</Link>
							: <SkeletonCustom circle height={40} width={40} />
						}

						{!isLoading ?
							mediaSocial.imdb_id &&
							<Link
								target={'_blank'}
								to={`https://www.imdb.com/name/${mediaSocial.imdb_id}`}
								aria-label='IMdb'
							>
								<FaImdb className='icon-social' />
							</Link>
							: <SkeletonCustom circle height={40} width={40} />
						}

						{!isLoading ?
							mediaSocial.twitter_id &&
							<Link
								target={'_blank'}
								to={`https://twitter.com/${mediaSocial.twitter_id}`}
								aria-label='Twitter'
							>
								<FaTwitter className='icon-social' />
							</Link>
							: <SkeletonCustom circle height={40} width={40} />
						}

						{!isLoading ?
							mediaSocial.wikidata_id &&
							<Link
								target={'_blank'}
								to={`https://pt.wikipedia.org/wiki/${person?.name}`}
								aria-label='Wikipedia'
							>
								<FaWikipediaW className='icon-social' />
							</Link>
							: <SkeletonCustom circle height={40} width={40} />

						}
					</StyledSocialNetworks>

					<StyledInfoContent>
						<header>
							<Heading component='h2' variant='subtitle' color='third'>Informações pessoais</Heading>
						</header>

						<article>
							<Heading component='h3' variant='h6' color='third'>Conhecido(a) por (em inglês)</Heading>
							<Paragraph size='sm' color='secondary'>{!isLoading ? person?.known_for_department : <SkeletonCustom count={1} height={16} width={'90%'} />}</Paragraph>
						</article>

						<article>
							<Heading component='h3' variant='h6' color='third'>Popularidade</Heading>
							<Paragraph size='sm' className='p' color='secondary'>{!isLoading ? person?.popularity : <SkeletonCustom count={1} height={16} width={'30%'} />}</Paragraph>
						</article>

						<article>
							<Heading component='h3' variant='h6' color='third'>Gênero</Heading>
							<Paragraph size='sm' color='secondary'>{!isLoading ? getGenreName(person?.gender) : <SkeletonCustom count={1} height={16} width={'40%'} />}</Paragraph>
						</article>

						<article>
							<Heading component='h3' variant='h6' color='third'>Nascimento</Heading>
							<Paragraph size='sm' color='secondary'>
								{!isLoading
									? `${convertDataToLocation(person?.birthday)} (${!person.deathday && differenceBetweenDates(person?.birthday)} de Idade)`
									: <SkeletonCustom count={1} height={16} width={'60%'} />
								}
							</Paragraph>
						</article>

						{person?.deathday
							&&
							<article>
								<Heading component='h3' variant='h6' color='third'>Falecimento</Heading>
								<Paragraph size='sm' color='secondary'>
									{!isLoading
										? `† ${convertDataToLocation(person?.deathday)} (${differenceBetweenDates(person?.birthday)} de Idade)`
										: <SkeletonCustom count={1} height={16} width={'60%'} />
									}
								</Paragraph>
							</article>
						}

						<article>
							<Heading component='h3' variant='h6' color='third'>Local de nascimento (em inglês)</Heading>
							<Paragraph size='sm' color='secondary'>
								{!isLoading ? person?.place_of_birth : <SkeletonCustom count={1} height={16} width={'100%'} />}
							</Paragraph>
						</article>

						<article>
							<Heading component='h3' variant='h6' color='third'>Também conhecido(a) como</Heading>
							{!isLoading
								? person.also_known_as?.map((item, index) => (
									<Paragraph key={index} size='sm' color='secondary'>{item}</Paragraph>
								))
								: <SkeletonCustom count={2} height={16} width={'56%'} />
							}
						</article>
					</StyledInfoContent>
				</StyledAside>

				<StyledContent>
					<Heading component='h1' variant='h4' color='third'>
						{!isLoading ? person?.name : <SkeletonCustom count={1} height={30} width={'53%'} borderRadius={6} />}
					</Heading>

					<StyledDisplayContent>
						<Heading component='h2' variant='subtitle' color='third'>
							Biografia
						</Heading>
						<Paragraph color='secondary' size='sm'>
							{!isLoading ? person?.biography : <SkeletonCustom count={5} height={20} width={'100%'} borderRadius={4} />}
						</Paragraph>
					</StyledDisplayContent>

					<StyledDisplayContent>
						<Heading component='h2' variant='subtitle' color='third'>
							Conhecido(a) por
						</Heading>

						<KnowFor
							knowFor={knowFor}
							isLoading={isLoadingKnow}
						/>
					</StyledDisplayContent>
				</StyledContent>
			</StyledGrid>
		</StyledContainer >
	);
};


export default PeopleDetails;