// Hooks React
import { useEffect, useMemo } from 'react';

// Componentes de terceiros
import CountUp from 'react-countup';

// Componentes
import MyLink from 'ui/components/common/MyLink';

// Hooks personalizado
import useLanguage from 'data/hooks/useLanguage';
import { useAuthContext } from 'data/hooks/useAuthContext';

// Estilos styled-components
import {
	StyledBannerMain,
	StyledContainer,
	StyledCount,
	StyledDescription,
	StyledDownloadGif,
	StyledFigure,
	StyledGridStatistics,
	StyledImage,
	StyledParagraph,
	StyledPlan,
	StyledSection,
	StyledSeparate,
	StyledStatistics,
	StyledSubtitle,
	StyledTitle,
	StyledWatchOffline,
	StyledWrapStatistics,
	StyledWrapper,
	StyledWrapperDescription,
} from './Start';

import translate from './translates.json';
import { useNavigate } from 'react-router-dom';

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
			<StyledBannerMain>
				<StyledContainer>
					<StyledTitle>
						{translates?.title} <span>; )</span>
					</StyledTitle>

					<StyledParagraph>{translates?.description_plane}</StyledParagraph>

					<StyledPlan>
						<MyLink to='/signin'>{translates?.login}</MyLink>

						<StyledSeparate>{translates?.separate}</StyledSeparate>

						<MyLink to='/signup'>{translates?.days_free}</MyLink>
					</StyledPlan>

					<StyledParagraph className='politic'>{translates?.politic}</StyledParagraph>
				</StyledContainer>
			</StyledBannerMain>

			{translates?.watch.map((watch) => (
				<StyledSection key={watch.subtitle}>
					<StyledWrapper>
						<StyledWrapperDescription>
							<StyledSubtitle>{watch.subtitle}</StyledSubtitle>
							<StyledParagraph>{watch.description}</StyledParagraph>
						</StyledWrapperDescription>

						<StyledFigure>
							<StyledImage src={watch.image} alt='' />
						</StyledFigure>
					</StyledWrapper>
				</StyledSection>
			))}

			<StyledSection>
				<StyledWrapper>
					<StyledWrapperDescription>
						<StyledSubtitle>{translates?.download.subtitle}</StyledSubtitle>
						<StyledParagraph>{translates?.download.description}</StyledParagraph>
					</StyledWrapperDescription>

					<StyledFigure>
						<StyledImage src={translates?.download.image} alt='' />
						<StyledWatchOffline>
							<StyledImage
								src={translates?.download.image_movie}
								alt={translates?.download.movie}
							/>
							<StyledDescription>
								<p>{translates?.download.movie}</p>
								<span>{translates?.download.message}</span>
							</StyledDescription>
							<StyledDownloadGif />
						</StyledWatchOffline>
					</StyledFigure>
				</StyledWrapper>
			</StyledSection>

			<StyledStatistics>
				<StyledSubtitle className='modify'>{translates?.statistics.subtitle}</StyledSubtitle>

				<StyledGridStatistics>
					<StyledWrapStatistics>
						<CountUp
							start={3200}
							end={4000}
							duration={2.5}
							suffix='+'
							separator=''
							enableScrollSpy={true}
						>
							{({ countUpRef }) => <StyledCount ref={countUpRef} />}
						</CountUp>

						<StyledParagraph>{translates?.statistics.catalog}</StyledParagraph>
					</StyledWrapStatistics>
					<StyledWrapStatistics>
						<CountUp
							start={80}
							end={200}
							duration={2.5}
							suffix='+'
							separator=''
							enableScrollSpy={true}
						>
							{({ countUpRef }) => <StyledCount ref={countUpRef} />}
						</CountUp>
						<StyledParagraph>{translates?.statistics.original_productions}</StyledParagraph>
					</StyledWrapStatistics>
					<StyledWrapStatistics>
						<CountUp start={0} end={5} enableScrollSpy={true}>
							{({ countUpRef }) => <StyledCount ref={countUpRef} />}
						</CountUp>

						<StyledParagraph>{translates?.statistics.present_countries}</StyledParagraph>
					</StyledWrapStatistics>
				</StyledGridStatistics>
			</StyledStatistics>
		</>
	);
};

export default Start;
