import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import useLanguage from 'data/hooks/useLanguage';

import {
	StyledContainer,
	StyledFigure,
	StyledGoBack,
	StyledImage,
	StyledWrapper,
} from './NotFound';

import Heading from 'ui/components/common/Typography/Heading';
import MyButton from 'ui/components/common/MyButton';
import Paragraph from 'ui/components/common/Typography/Paragraph';

import NOT_FOUND from 'assets/svgs/not-found.svg';
import languages from './translate.json';

const NotFound = () => {
	const { language } = useLanguage();
	const navigate = useNavigate();

	function handleGoBack() {
		navigate(-1);
	}

	const translate = useMemo(() => {
		return languages.translation.find((item) => item.code === language);
	}, [language]);

	return (
		<StyledContainer>
			<Heading variant='h5' component='h1'>
				{translate?.title}
			</Heading>

			<StyledWrapper>
				<StyledGoBack>
					<MyButton
						variant='primary'
						icon='goBack'
						mode='square'
						direction='ltr'
						onClick={handleGoBack}
					>
						<Paragraph size='lg'>{translate?.go_back}</Paragraph>
					</MyButton>
				</StyledGoBack>

				<StyledFigure>
					<StyledImage src={`${NOT_FOUND}`} alt='Not found' />
				</StyledFigure>
			</StyledWrapper>
		</StyledContainer>
	);
};

export default NotFound;
