import styled from 'styled-components';

interface IMenuMobile {
	open: boolean;
}

export const Container = styled.div<IMenuMobile>`
	position: fixed;
	top: 90px;
	left: 0px;
	z-index: 1200;
	width: 100%;
	height: 100%;
	visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
`;

export const ModalShadow = styled.div`
	position: absolute;
	width: 100%;
	background-color: rgba(0, 10, 22, 0.5);
	height: 100%;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.15s ease;
	cursor: pointer;

	&.active-menu {
		opacity: 1;
		visibility: visible;
	}
`;

export const Sidebar = styled.aside`
	position: absolute;
	background-color: rgb(0, 10, 22);
	height: 100%;
	width: 250px;
	left: -0px;
	top: 0;
	z-index: 9999;
	transform: translateX(-250px);
	visibility: hidden;
	transition: all 0.15s cubic-bezier(0.5, 0, 0.1, 1);

	&.active-navigate-menu {
		left: 0%;
		transform: translateX(0px);
		visibility: visible;
	}
`;

export const Wrapper = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.colors.basic[200]};
	padding: 1.3rem 1.6rem;

	& > a {
		display: block;
		color: ${({ theme }) => theme.colors.basic[100]};
		font-weight: 600;
		font-size: 0.775rem;
		padding: 0.2rem;
	}
`;
