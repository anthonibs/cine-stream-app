// Hooks React
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import CountUp from 'react-countup';

import MyLink from 'ui/components/common/MyLink';

import useLanguage from 'data/hooks/useLanguage';
import useAuthContext from 'data/hooks/useAuthContext';

import * as S from './Start';

import translate from './translates.json';

const Start = () => {
	const { language } = useLanguage();
	const { authenticated } = useAuthContext();

	const navigate = useNavigate();

	const translates = useMemo(() => {
		return translate.language.find((translate) => translate.code === language);
	}, [language]);

	useEffect(() => {
		if (authenticated) {
			navigate('/browser');
		}
	}, [authenticated, navigate]);

	return (
		<>
			<S.BannerMain>
				<S.Container>
					<S.Title>
						{translates?.title} <span>; )</span>
					</S.Title>

					<S.Paragraph>{translates?.description_plane}</S.Paragraph>

					<S.Plan>
						<MyLink to='/signin'>{translates?.login}</MyLink>

						<S.Separate>{translates?.separate}</S.Separate>

						<MyLink to='/signup'>{translates?.days_free}</MyLink>
					</S.Plan>

					<S.Paragraph className='politic'>{translates?.politic}</S.Paragraph>
				</S.Container>
			</S.BannerMain>

			{translates?.watch.map((watch) => (
				<S.Section key={watch.subtitle}>
					<S.Wrapper>
						<S.WrapperDescription>
							<S.Subtitle>{watch.subtitle}</S.Subtitle>
							<S.Paragraph>{watch.description}</S.Paragraph>
						</S.WrapperDescription>

						<S.Figure>
							<S.Image
								src={watch.image}
								alt='Cartazes de filmes sobreposto um sobre o outro.'
								loading='lazy'
								decoding='async'
							/>
						</S.Figure>
					</S.Wrapper>
				</S.Section>
			))}

			<S.Section>
				<S.Wrapper>
					<S.WrapperDescription>
						<S.Subtitle>{translates?.download.subtitle}</S.Subtitle>
						<S.Paragraph>{translates?.download.description}</S.Paragraph>
					</S.WrapperDescription>

					<S.Figure>
						<S.Image
							src={translates?.download.image}
							alt='Celular com imagem de fita de cinema saindo da tela em 3D.'
							loading='lazy'
							decoding='async'
						/>
						<S.WatchOffline>
							<S.Image
								src={translates?.download.image_movie}
								alt={translates?.download.movie}
								loading='lazy'
								decoding='async'
							/>
							<S.Description>
								<p>{translates?.download.movie}</p>
								<span>{translates?.download.message}</span>
							</S.Description>
							<S.DownloadGif />
						</S.WatchOffline>
					</S.Figure>
				</S.Wrapper>
			</S.Section>

			<S.Statistics>
				<S.Subtitle className='modify'>{translates?.statistics.subtitle}</S.Subtitle>

				<S.GridStatistics>
					<S.WrapStatistics>
						<CountUp start={3200} end={4000} duration={2.5} suffix='+' separator=''>
							{({ countUpRef }) => <S.Count ref={countUpRef} />}
						</CountUp>

						<S.Paragraph>{translates?.statistics.catalog}</S.Paragraph>
					</S.WrapStatistics>
					<S.WrapStatistics>
						<CountUp start={80} end={200} duration={2.5} suffix='+' separator=''>
							{({ countUpRef }) => <S.Count ref={countUpRef} />}
						</CountUp>
						<S.Paragraph>{translates?.statistics.original_productions}</S.Paragraph>
					</S.WrapStatistics>
					<S.WrapStatistics>
						<CountUp start={2} duration={3} end={7}>
							{({ countUpRef }) => <S.Count ref={countUpRef} />}
						</CountUp>

						<S.Paragraph>{translates?.statistics.present_countries}</S.Paragraph>
					</S.WrapStatistics>
				</S.GridStatistics>
			</S.Statistics>
		</>
	);
};

export default Start;
