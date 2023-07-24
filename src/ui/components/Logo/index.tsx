import { memo } from 'react';

import logo from 'assets/svgs/logo-cine-stream.svg';

import * as S from './Logo';

const Logo = () => {
	return (
		<S.LogoContainer>
			<S.LogoImage src={logo} alt='Logo oficial da CineStream' loading='lazy' decoding='async' />
		</S.LogoContainer>
	);
};

export default memo(Logo);
