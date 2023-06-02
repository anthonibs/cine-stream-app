import styled from 'styled-components';

export const StyledContainer = styled.div`
	padding: .5rem .0rem .5rem .7rem;

	& .slider-container-size {
		height: 100%;
		width: 100%;
	}

	& .slick-track  {
		display: flex;
		gap: 1rem;
		padding: .5rem 0;

		& .slick-slide:not(.slick-active)  {
			filter: contrast(.70);
			opacity: .78;
		}
	}

	& .slick-prev {
		left: -45px;
	}

	& .slick-next {
		right: -45px;
	}
`;