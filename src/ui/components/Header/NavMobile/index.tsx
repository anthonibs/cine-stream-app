import Navigation from '../Navigation';
import Profile from '../Profile';

import * as S from './styles';

interface IMenuProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMobile = ({ open, setOpen }: IMenuProps) => {
	function toggleNavigateMenu() {
		setOpen(!open);
	}

	return (
		<S.Container open={open}>
			<S.ModalShadow onClick={toggleNavigateMenu} className={open ? 'active-menu' : ''} />
			<S.Sidebar className={open ? 'active-navigate-menu' : ''}>
				<S.Wrapper>
					<Profile />
				</S.Wrapper>

				<Navigation />
			</S.Sidebar>
		</S.Container>
	);
};

export default NavMobile;
