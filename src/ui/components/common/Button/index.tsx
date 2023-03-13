import { ReactNode } from 'react';
import { Button, LinkCustom, } from './Button';

interface IMyButtonProps {
	type?: 'button' | 'submit' | 'reset';
	url?: string;
	children: ReactNode;
	outline?: boolean;
}

const MyButton = ({
	children,
	url,
	type,
	outline }: IMyButtonProps) => {

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
		>
			{children}
		</Button >

	);
};


export default MyButton;