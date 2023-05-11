import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyLink = styled(Link)`
	background-color: ${({ theme }) => theme.colors.main};
	border-radius: .125rem;
	color: ${({ theme }) => theme.font.color[100]};
	display: block;
	font-weight: ${({ theme }) => theme.font.weight[300]};
	font-size: ${({ theme }) => theme.font.sizes.b.md};
	line-height: 2;
	outline: none;
	padding: 1rem;
	text-align: center;
	transition: all .3s ease-in-out;
	width: 100%;

	&:hover, &:focus {
		box-shadow: ${({ theme }) => theme.colors.main} 0px 2px 4px 0px;
		filter: drop-shadow(0 0 .45rem  ${({ theme }) => theme.colors.main});
		transform: scale(1.01);
	}
`;

export default MyLink;