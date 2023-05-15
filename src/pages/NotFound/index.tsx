import { useNavigate } from 'react-router-dom';

import {
	Image,
	StyledContainer,
	StyledFigure,
	StyledGoBack,
	StyledWrapper
} from './NotFound';

import Heading from 'ui/components/common/Typography/Heading';
import MyButton from 'ui/components/common/MyButton';
import Paragraph from 'ui/components/common/Typography/Paragraph';

import NOT_FOUND from 'assets/svgs/not-found.svg';

const NotFound = () => {

	const navigate = useNavigate();

	function handleGoBack() {
		navigate(-1);
	}

	return (
		<StyledContainer>
			<Heading variant='h4' component='h1'>
				Página não encontrada!
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
						<Paragraph size='lg'>
							Voltar
						</Paragraph>
					</MyButton>
				</StyledGoBack>

				<StyledFigure>
					<Image src={`${NOT_FOUND}`} alt="Not found" />
				</StyledFigure>
			</StyledWrapper>
		</StyledContainer>
	);
};

export default NotFound;
