import { StyledSpinner } from './Spinner';

interface IProps {
	scale: number;
}

const Spinner = ({ scale }: IProps) => {
	return (
		<StyledSpinner className="loader" scale={scale}/>
	);
};

export default Spinner;