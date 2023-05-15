import { ReactNode, useMemo } from 'react';

import { Button } from './MyButton';

import { TbDownload, TbPlayerPlayFilled, TbPlus } from 'react-icons/tb';
import { RiArrowGoBackFill } from 'react-icons/ri';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	variant?: 'primary' | 'default';
	icon?: 'download' | 'plus' | 'play' | 'goBack';
	direction?: 'ltr' | 'rtl';
	mode?: 'round' | 'square';
}

const listIcons = [
	{
		id: 1,
		name: 'download',
		icon: <TbDownload />
	},
	{
		id: 2,
		name: 'plus',
		icon: <TbPlus />
	},
	{
		id: 3,
		name: 'play',
		icon: <TbPlayerPlayFilled />
	},
	{
		id: 4,
		name: 'goBack',
		icon: <RiArrowGoBackFill />
	}
];


const MyButton = ({ children, variant = 'default', icon, direction, mode = 'round', ...props }: IProps) => {
	const findIcon = useMemo(() => {
		return listIcons.find(item => item.name === icon);
	}, [icon]);

	return (
		<Button {...props} className={variant} direction={direction} modes={mode} isIcon={!!icon}>
			{children}
			{findIcon?.icon}
		</Button>
	);
};

export default MyButton;