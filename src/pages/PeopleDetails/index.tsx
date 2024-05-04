import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import useLanguage from 'data/hooks/useLanguage';

import { IMediaSocial, IMovie, IPage, IPersonDetails } from 'data/interfaces';

import { FaImdb, FaInstagram, FaTwitter, FaWikipediaW } from 'react-icons/fa';

import DiscoverServer from 'data/services/DiscoverServer';
import PersonServer from 'data/services/PersonServer';

import Heading from 'ui/components/common/Typography/Heading';
import Paragraph from 'ui/components/common/Typography/Paragraph';
import SkeletonCustom from 'ui/components/common/SkeletonCustom';
import Head from 'ui/components/common/Head';
import KnowFor from './KnowFor';

import * as S from './PeopleDetails';

import { differenceBetweenDates } from 'utils';

import translate from './translate.json';

const IMAGE = process.env.REACT_APP_IMG;
const PUBLIC = process.env.PUBLIC_URL;
const IMAGE_BACKGROUND = 'assets/images/not-picture.png';

const genderGroup = [
	{
		code: 'pt-BR',
		genres: [
			{
				genre_id: 1,
				genre_name: 'Feminino',
			},
			{
				genre_id: 2,
				genre_name: 'Masculino',
			},
		],
	},
	{
		code: 'en-US',
		genres: [
			{
				genre_id: 1,
				genre_name: 'Female',
			},
			{
				genre_id: 2,
				genre_name: 'Male',
			},
		],
	},
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

	const translatePeopleDetails = useMemo(() => {
		return translate.people_details.find((item) => item.code === language);
	}, [language]);

	useEffect(() => {
		loaderPerson();
		loaderMediaSocial();
		loaderKnowFor();
	}, [loaderPerson, loaderMediaSocial, loaderKnowFor]);

	return (
		<S.Container>
			<Head title={translatePeopleDetails?.biography || ''} />

			<S.Grid>
				<S.Aside>
					<S.ImageProfile>
						{!isLoading ? (
							<img
								src={
									person?.profile_path
										? `${IMAGE}${person?.profile_path}`
										: `${PUBLIC}/${IMAGE_BACKGROUND}`
								}
								alt={person?.name}
								loading='lazy'
								decoding='async'
							/>
						) : (
							<SkeletonCustom count={1} height={400} borderRadius={10} />
						)}
					</S.ImageProfile>

					<S.SocialNetworks>
						{!isLoading ? (
							mediaSocial.instagram_id && (
								<Link
									target={'_blank'}
									to={`https://www.instagram.com/${mediaSocial.instagram_id}`}
									aria-label='Instagram'
								>
									<FaInstagram className='icon-social' />
								</Link>
							)
						) : (
							<SkeletonCustom circle height={40} width={40} />
						)}

						{!isLoading ? (
							mediaSocial.imdb_id && (
								<Link
									target={'_blank'}
									to={`https://www.imdb.com/name/${mediaSocial.imdb_id}`}
									aria-label='IMdb'
								>
									<FaImdb className='icon-social' />
								</Link>
							)
						) : (
							<SkeletonCustom circle height={40} width={40} />
						)}

						{!isLoading ? (
							mediaSocial.twitter_id && (
								<Link
									target={'_blank'}
									to={`https://twitter.com/${mediaSocial.twitter_id}`}
									aria-label='Twitter'
								>
									<FaTwitter className='icon-social' />
								</Link>
							)
						) : (
							<SkeletonCustom circle height={40} width={40} />
						)}

						{!isLoading ? (
							mediaSocial.wikidata_id && (
								<Link
									target={'_blank'}
									to={`https://pt.wikipedia.org/wiki/${person?.name}`}
									aria-label='Wikipedia'
								>
									<FaWikipediaW className='icon-social' />
								</Link>
							)
						) : (
							<SkeletonCustom circle height={40} width={40} />
						)}
					</S.SocialNetworks>

					<S.InfoContent>
						<header>
							<Heading component='h2' variant='subtitle' color='third'>
								{translatePeopleDetails?.personal_information}
							</Heading>
						</header>

						<article>
							<Heading component='h3' variant='h6' color='third'>
								{translatePeopleDetails?.also_known_as}
							</Heading>
							{!isLoading ? (
								<Paragraph size='sm' color='secondary'>
									{person?.known_for_department}
								</Paragraph>
							) : (
								<SkeletonCustom count={1} height={16} width={'90%'} />
							)}
						</article>

						<article>
							<Heading component='h3' variant='h6' color='third'>
								{translatePeopleDetails?.popularity}
							</Heading>
							{!isLoading ? (
								<Paragraph size='sm' className='p' color='secondary'>
									{person?.popularity}
								</Paragraph>
							) : (
								<SkeletonCustom count={1} height={16} width={'30%'} />
							)}
						</article>

						<article>
							<Heading component='h3' variant='h6' color='third'>
								{translatePeopleDetails?.gender}
							</Heading>
							{!isLoading ? (
								<Paragraph size='sm' color='secondary'>
									{getGenreName(person?.gender)}
								</Paragraph>
							) : (
								<SkeletonCustom count={1} height={16} width={'40%'} />
							)}
						</article>

						<article>
							<Heading component='h3' variant='h6' color='third'>
								{translatePeopleDetails?.birth}
							</Heading>
							{!isLoading ? (
								<Paragraph size='sm' color='secondary'>
									{`${convertDataToLocation(person?.birthday)} (${
										!person.deathday && differenceBetweenDates(person?.birthday)
									} ${translatePeopleDetails?.years})`}
								</Paragraph>
							) : (
								<SkeletonCustom count={1} height={16} width={'60%'} />
							)}
						</article>

						{person?.deathday && (
							<article>
								<Heading component='h3' variant='h6' color='third'>
									{translatePeopleDetails?.death}
								</Heading>
								{!isLoading ? (
									<Paragraph size='sm' color='secondary'>
										{`† ${convertDataToLocation(person?.deathday)} (${differenceBetweenDates(
											person?.birthday
										)} ${translatePeopleDetails?.years})`}
									</Paragraph>
								) : (
									<SkeletonCustom count={1} height={16} width={'60%'} />
								)}
							</article>
						)}

						<article>
							<Heading component='h3' variant='h6' color='third'>
								{translatePeopleDetails?.place_of_birth}
							</Heading>
							{!isLoading ? (
								<Paragraph size='sm' color='secondary'>
									{person?.place_of_birth}
								</Paragraph>
							) : (
								<SkeletonCustom count={1} height={16} width={'100%'} />
							)}
						</article>

						<article>
							<Heading component='h3' variant='h6' color='third'>
								{translatePeopleDetails?.known_for}
							</Heading>
							{!isLoading ? (
								person.also_known_as?.map((item, index) => (
									<Paragraph key={index} size='sm' color='secondary'>
										{item}
									</Paragraph>
								))
							) : (
								<SkeletonCustom count={2} height={16} width={'56%'} />
							)}
						</article>
					</S.InfoContent>
				</S.Aside>

				<S.Content>
					{!isLoading ? (
						<Heading component='h1' variant='h4' color='third'>
							{person?.name}
						</Heading>
					) : (
						<SkeletonCustom count={1} height={30} width={'53%'} borderRadius={6} />
					)}

					<S.DisplayContent>
						<Heading component='h2' variant='subtitle' color='third'>
							{translatePeopleDetails?.biography}
						</Heading>
						{!isLoading ? (
							<Paragraph color='secondary' size='sm'>
								{person?.biography}
							</Paragraph>
						) : (
							<SkeletonCustom count={5} height={20} width={'100%'} borderRadius={4} />
						)}
					</S.DisplayContent>

					<S.DisplayContent>
						<Heading component='h2' variant='subtitle' color='third'>
							{translatePeopleDetails?.known_for}
						</Heading>

						<KnowFor knowFor={knowFor} isLoading={isLoadingKnow} />
					</S.DisplayContent>
				</S.Content>
			</S.Grid>
		</S.Container>
	);
};

export default PeopleDetails;
