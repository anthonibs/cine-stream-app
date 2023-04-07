import { ToggleMenu } from './Menu';

interface IMenuProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ open, setOpen }: IMenuProps) => {
	function toggleMenuOpen() {
		setOpen(prev => !prev);
	}


	return (
		<ToggleMenu
			className={open ? 'open-menu' : ''}
			onClick={toggleMenuOpen}
		>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</ToggleMenu>
	);
};

export default Menu;