import { memo } from 'react';

import logo from 'assets/svgs/logo-cine-stream.svg';

import * as S from './Logo';

const Logo = () => {
	return (
		<S.LogoContainer>
			<S.LogoImage src={logo} loading='lazy' alt='Logo oficial da CineStream' />
		</S.LogoContainer>
	);
};

export default memo(Logo);
