import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import * as S from './SkeletonCustom';

type IProps = SkeletonProps;

const SkeletonCustom = (props: IProps) => {
	return (
		<S.Container>
			<Skeleton className='skeleton-custom' {...props} />
		</S.Container>
	);
};

export default SkeletonCustom;
