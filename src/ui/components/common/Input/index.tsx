import { useMemo, useState } from 'react';
import { RiEye2Line, RiEyeCloseLine } from 'react-icons/ri';
import { ButtonDisplayPass, InputCustom } from './Input';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	displayPass?: boolean;
}

const Input = ({ displayPass, ...rest }: InputProps) => {

	const [displayPassword, setDisplayPassword] = useState(false);

	function handlerDisplayPass() {
		setDisplayPassword(prevState => !prevState);
	}

	const eyes = useMemo(() => {
		return displayPassword ? <RiEyeCloseLine /> : <RiEye2Line />;
	}, [displayPassword]);

	return (
		<>
			<InputCustom
				type={displayPassword ? 'text' : 'password'}
				{...rest}
			/>

			{displayPass &&
				<ButtonDisplayPass
					onClick={handlerDisplayPass}
					type='button'
					aria-label='Exibir senha'
					aria-hidden={displayPassword}
					aria-labelledby='input-password'
				>
					{eyes}
				</ButtonDisplayPass>
			}
		</>
	);
};

export default Input;