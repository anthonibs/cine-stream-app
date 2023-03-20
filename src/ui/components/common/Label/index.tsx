import { LabelCustom } from './Label';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const Label = ({ children }: LabelProps, rest: LabelProps) => {
	return (
		<LabelCustom {...rest}>
			{children}
		</LabelCustom>
	);
};

export default Label;