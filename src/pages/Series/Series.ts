import styled from 'styled-components';

export const GridColumn = styled.div`
	display: grid;
	margin: 0 auto;
	padding-top: 110px;
	width: 93%;
	max-width: 1400px;
	gap: 1rem 2rem;
	margin-bottom: 3rem;

	@media (min-width: 375px) {
		grid-template-areas:
		'title'
		'filter'
		'films';
		grid-template-columns: 1fr;
	}

	@media (min-width: 680px) {
		grid-template-areas:
		'title title'
		'filter films';
		grid-template-columns: 230px 1fr;
	}

	@media (min-width: 968px) {
		gap: 1rem;
	}

	@media (min-width: 1100px) {
		grid-template-columns: 260px 1fr;
		gap: 1rem 2rem;
	}
`;


export const Title = styled.h1`
	font-size: 2.5rem;
	grid-area: title;
	color: ${({ theme }) => theme.colors.basic[100]};
`;


export const Filter = styled.aside`
	grid-area: filter;
`;


export const FormFilter = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;


export const FilterSearchButton = styled.button`
	width: 100%;
	padding: .625rem;
	border-radius: 3rem;
	font-size: 1.2rem;
	font-weight: 600;
	color: ${({theme}) => theme.colors.basic[100]};
	cursor: pointer;
	background-color: ${({theme}) => theme.colors.main};
	transition: background .3s ease-in-out;

	&:disabled, &:disabled:hover {
		cursor: default;
		background-color: #ECECEC;
		color: rgba(0,0,0,0.5);
	}

	&:hover {
		cursor: pointer;
		background-color: ${({theme}) => theme.colors.mainHover};
	}
`;


export const Container = styled.section`
	grid-area: films;
	min-height: calc(100vh - 400px);
	height: 100%;
`;


export const Wrapper = styled.div`
	width: 100%;
	display: grid;
	margin-bottom: 2rem;

	& > .card-hover:hover {
		border-radius: .45rem .45rem 0 0;
		background-color:#131313;
		box-shadow: 6px 6px 6px rgba(0, 0, 0, .2);
		z-index: 200;
	}

	@media (min-width: 375px) {
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	@media (min-width: 400px) {
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	@media (min-width: 850px) {
		grid-template-columns: repeat(3, minmax(150px, 1fr));
	}

	@media (min-width: 968px) {
		grid-template-columns: repeat(4, minmax(150px, 1fr));
		gap: 1rem;
	}

	@media (min-width: 1290px) {
		grid-template-columns: repeat(5, minmax(160px, 1fr));
		gap: 1.6rem;
	}
`;


export const Fieldset = styled.fieldset`
	border-top: 1px solid ${({ theme }) => theme.colors.basic[200]};
	padding: 1rem;
	display: none;
`;


export const TitleLabel = styled.h3`
	font-size: .875rem;
	font-weight: 300;
	margin-bottom: .3rem;
`;


export const Input = styled.input`
	font-size: 0.9rem;
	padding: 0.575rem 0.325rem;
	width: 100%;
	border-radius: .2rem;
	border-color: #e4e7eb;
	color: #212529;
	background-color: #e4e7eb;
`;