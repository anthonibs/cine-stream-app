import styled from 'styled-components';

export const LabelCustom = styled.label`
	font-size: 1rem;
	color: ${({theme}) => theme.colors.basic[300]};
	font-weight: ${({theme}) => theme.font.weight[200]};
	padding: 0 .3rem .2rem;
`;