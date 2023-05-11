import styled from 'styled-components';

export const Container = styled.div`
	padding: .5rem .0rem .5rem .7rem;

	.slider-container-size {
		height: 100%;
	}

	& .slick-track  {
		display: flex;
		gap: 1rem;

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