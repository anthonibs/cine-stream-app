import * as S from './Spinner';

interface IProps {
	scale: number;
}

const Spinner = ({ scale }: IProps) => {
	return <S.Spinner className='loader' scale={scale} />;
};

export default Spinner;
