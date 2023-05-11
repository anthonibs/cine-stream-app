import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import { Container } from './SkeletonCustom';

type IProps = SkeletonProps

const SkeletonCustom = (props: IProps) => {
	return (
		<Container>
			<Skeleton
				className='skeleton-custom'
				{...props}
			/>
		</Container>
	);
};

export default SkeletonCustom;