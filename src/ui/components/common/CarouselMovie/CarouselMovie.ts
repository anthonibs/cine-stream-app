import styled from 'styled-components';

export const StyledContainer = styled.div`
	padding: 0.5rem 0rem 0.5rem 0.7rem;

	& .slider-container-size {
		height: 100%;
		width: 100%;
	}

	& .slick-track {
		display: flex;
		gap: 1rem;
		padding: 0.5rem 0;

		& .slick-slide:not(.slick-active) {
			filter: contrast(0.7);
			opacity: 0.78;
		}
	}

	& .slick-prev {
		left: -45px;
	}

	& .slick-next {
		right: -45px;
	}
`;
