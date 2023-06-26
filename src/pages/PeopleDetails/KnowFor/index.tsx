import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { IMovie } from 'data/interfaces';

import * as S from './KnowFor';

import useIsElementVisible from 'data/hooks/useObserverScroll';
import Paragraph from 'ui/components/common/Typography/Paragraph';
import SkeletonCustom from 'ui/components/common/SkeletonCustom';

import { removeAccentsFromText } from 'utils';

const IMAGE = process.env.REACT_APP_IMG;
const PUBLIC = process.env.PUBLIC_URL;
const IMAGE_BACKGROUND = 'assets/images/not-picture.png';

type IKnowFor = {
	knowFor: IMovie[];
	isLoading?: boolean;
};

const KnowFor = ({ knowFor, isLoading }: IKnowFor) => {
	const targetRef = useRef<HTMLElement | null>(null);
	const isLastVisible = useIsElementVisible(targetRef.current);

	return (
		<S.KnownForScroll className={!isLastVisible ? 'is-fading-scroll' : ''}>
			<S.ListKnowFor>
				<S.TargetScroll ref={targetRef} />
				{!isLoading
					? knowFor?.map((item) => (
							<S.ItemKnowFor key={item.id}>
								<figure>
									<img
										src={
											item?.poster_path
												? `${IMAGE}${item?.poster_path}`
												: `${PUBLIC}/${IMAGE_BACKGROUND}`
										}
										alt={item?.title}
									/>
								</figure>

								<Link
									to={`/browser/films/${item.id}-${removeAccentsFromText(item.title)}`}
									state={'films'}
								>
									<Paragraph size='xsm' color='primary'>
										{item.title}
									</Paragraph>
								</Link>
							</S.ItemKnowFor>
					  ))
					: Array(6)
							.fill(0)
							.map((_, index) => (
								<S.ItemKnowFor key={index}>
									<SkeletonCustom count={1} height={240} borderRadius={7} />
									<SkeletonCustom count={1} width={'88%'} />
								</S.ItemKnowFor>
							))}
			</S.ListKnowFor>
		</S.KnownForScroll>
	);
};

export default KnowFor;
