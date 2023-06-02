import { StyledToggleMenu } from './Menu';

interface IMenuProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ open, setOpen }: IMenuProps) => {
	function toggleMenuOpen() {
		setOpen(prev => !prev);
	}


	return (
		<StyledToggleMenu
			className={open ? 'open-menu' : ''}
			onClick={toggleMenuOpen}
		>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</StyledToggleMenu>
	);
};

export default Menu;