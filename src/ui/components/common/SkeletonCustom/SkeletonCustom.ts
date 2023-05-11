import styled from 'styled-components';

export const Container = styled.div`
	& .skeleton-custom {
		background-color: ${({ theme }) => theme.skeleton.body};

		&::after {
			content: '';
			background: ${({ theme }) => theme.skeleton.after};
		}
	}
`;