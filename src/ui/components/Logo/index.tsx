import logo from 'assets/svgs/logo-cine-stream.svg';
import { memo } from 'react';
import { LogoContainer, LogoImage } from './Logo';

const Logo = () => {
	return (
		<LogoContainer>
			<LogoImage src={logo} loading='lazy' alt="Logo oficial da CineStream" />
		</LogoContainer>
	);
};

export default memo(Logo);
