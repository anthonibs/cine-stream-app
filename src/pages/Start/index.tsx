// Hooks React
import { useEffect, useMemo } from 'react';

// Componentes de terceiros
import CountUp from 'react-countup';

// Componentes
import MyLink from 'ui/components/common/MyLink';

// Hooks personalizado
import useLanguage from 'data/hooks/useLanguage';

// Estilos styled-components
import {
	BannerMain,
	Container,
	Count,
	Description,
	DownloadGif,
	Figure,
	GridStatistics,
	Image,
	Paragraph,
	Plan,
	Section,
	Separate,
	Statistics,
	Subtitle,
	Title,
	WatchOffline,
	Wrapper,
	WrapperDescription,
	WrapStatistics
} from './Start';

import translate from './translates.json';
// import { useAuthContext } from 'data/hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'data/hooks/useAuthContext';

const Start = () => {
	const { language } = useLanguage();
	const { authenticated } = useAuthContext();

	const navigate = useNavigate();

	const translates = useMemo(() => {
		return translate.language.find(translate => translate.code === language);
	}, [language]);

	useEffect(() => {
		if (authenticated) {
			navigate('/browser');
		}
	}, [authenticated, navigate]);

	return (
		<>
			<BannerMain>
				<Container>
					<Title>{translates?.title} <span>; )</span></Title>

					<Paragraph>
						{translates?.description_plane}
					</Paragraph>


					<Plan>
						<MyLink to='/signin'>
							{translates?.login}
						</MyLink>

						<Separate>{translates?.separate}</Separate>

						<MyLink to='/signup'>
							{translates?.days_free}
						</MyLink>
					</Plan>

					<Paragraph className='politic'>
						{translates?.politic}
					</Paragraph>
				</Container>
			</BannerMain>

			{translates?.watch.map(watch => (
				<Section key={watch.subtitle}>
					<Wrapper>
						<WrapperDescription>
							<Subtitle>{watch.subtitle}</Subtitle>
							<Paragraph>
								{watch.description}
							</Paragraph>
						</WrapperDescription>

						<Figure>
							<Image src={watch.image} alt="" />
						</Figure>
					</Wrapper>
				</Section>
			))}

			<Section>
				<Wrapper>
					<WrapperDescription>
						<Subtitle>{translates?.download.subtitle}</Subtitle>
						<Paragraph>
							{translates?.download.description}
						</Paragraph>
					</WrapperDescription>

					<Figure>
						<Image src={translates?.download.image} alt="" />
						<WatchOffline>
							<Image src={translates?.download.image_movie} alt={translates?.download.movie} />
							<Description>
								<p>{translates?.download.movie}</p>
								<span>{translates?.download.message}</span>
							</Description>
							<DownloadGif className='download' />
						</WatchOffline>
					</Figure>
				</Wrapper>
			</Section>

			<Statistics>
				<Subtitle className='modify'>
					{translates?.statistics.subtitle}
				</Subtitle>

				<GridStatistics>
					<WrapStatistics>
						<CountUp
							start={3200}
							end={4000}
							duration={2.5}
							suffix='+'
							separator=''
							enableScrollSpy={true}
						>
							{({ countUpRef }) => (
								<Count ref={countUpRef} />
							)}
						</CountUp>


						<Paragraph>{translates?.statistics.catalog}</Paragraph>
					</WrapStatistics>
					<WrapStatistics>
						<CountUp
							start={80}
							end={200}
							duration={2.5}
							suffix='+'
							separator=''
							enableScrollSpy={true}
						>
							{({ countUpRef }) => (
								<Count ref={countUpRef} />
							)}
						</CountUp>
						<Paragraph>{translates?.statistics.original_productions}</Paragraph>
					</WrapStatistics>
					<WrapStatistics>
						<CountUp
							start={0}
							end={5}
							enableScrollSpy={true}
						>
							{({ countUpRef }) => (
								<Count ref={countUpRef} />
							)}
						</CountUp>
						<Paragraph>{translates?.statistics.present_countries}</Paragraph>
					</WrapStatistics>
				</GridStatistics>
			</Statistics>
		</>
	);
};


export default Start;