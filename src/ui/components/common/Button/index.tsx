import { ReactNode } from 'react';
import { Button, LinkCustom, } from './Button';

interface IMyButtonProps {
	type?: 'button' | 'submit' | 'reset';
	url?: string;
	children: ReactNode;
	outline?: boolean;
	onClick?: () => void;
	disabled?: boolean;
}

const MyButton = ({
	children,
	url,
	type,
	outline,
	onClick,
	disabled
}: IMyButtonProps) => {

	if (url) {
		return (
			<LinkCustom
				to={url}
				className={outline ? 'outline' : ''}
			>
				{children}
			</LinkCustom>
		);
	}

	return (
		<Button
			type={type}
			className={outline ? 'outline' : ''}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</Button >

	);
};


export default MyButton;