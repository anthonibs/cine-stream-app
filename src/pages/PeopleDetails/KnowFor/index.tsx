import React, { useRef } from 'react';
import { StyledItemKnowFor, StyledKnownForScroll, StyledListKnowFor, StyledTargetScroll } from './KnowFor';
import { Link } from 'react-router-dom';
import { removeAccentsFromText } from 'utils';
import useIsElementVisible from 'data/hooks/useObserverScroll';
import { IMovie } from 'data/interfaces';
import Paragraph from 'ui/components/common/Typography/Paragraph';
import SkeletonCustom from 'ui/components/common/SkeletonCustom';

const IMAGE = process.env.REACT_APP_IMG;
const PUBLIC = process.env.PUBLIC_URL;
const IMAGE_BACKGROUND = 'assets/images/not-picture.png';

type IKnowFor = {
	knowFor: IMovie[];
	isLoading?: boolean
}

const KnowFor = ({ knowFor, isLoading }: IKnowFor) => {
	const targetRef = useRef<HTMLElement | null>(null);
	const isLastVisible = useIsElementVisible(targetRef.current);

	return (
		<StyledKnownForScroll className={!isLastVisible ? 'is-fading-scroll' : ''} >
			<StyledListKnowFor>
				<StyledTargetScroll ref={targetRef} />
				{!isLoading
					? knowFor?.map((item) => (
						<StyledItemKnowFor key={item.id}>
							<figure>
								<img src={item?.poster_path ? `${IMAGE}${item?.poster_path}` : `${PUBLIC}/${IMAGE_BACKGROUND}`} alt={item?.title} />
							</figure>

							<Link to={`/browser/films/${item.id}-${removeAccentsFromText(item.title)}`} state={'films'}>
								<Paragraph size='xsm' color='primary'>{item.title}</Paragraph>
							</Link>
						</StyledItemKnowFor>
					))
					: Array(6).fill(0).map((_, index) => (
						<StyledItemKnowFor key={index}>
							<SkeletonCustom count={1} height={240} borderRadius={7} />
							<SkeletonCustom count={1} width={'88%'} />
						</StyledItemKnowFor>))
				}
			</StyledListKnowFor>
		</StyledKnownForScroll>
	);
};

export default KnowFor;