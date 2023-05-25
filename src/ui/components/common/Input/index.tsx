import { useMemo, useState } from 'react';

import { RiEye2Line, RiEyeCloseLine } from 'react-icons/ri';

import {
	StyledButtonDisplayPass,
	StyledInput,
	StyledLabel,
	StyledWrapper
} from './Input';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	displayPass?: boolean;
	label: string;
	id?: string;
}

const Input = ({ displayPass, label, id, ...rest }: InputProps) => {
	const [displayPassword, setDisplayPassword] = useState(false);

	function handlerDisplayPass() {
		setDisplayPassword(prevState => !prevState);
	}

	const eyes = useMemo(() => {
		return displayPassword ? <RiEyeCloseLine /> : <RiEye2Line />;
	}, [displayPassword]);

	
	return (
		<StyledWrapper>
			<StyledInput
				id={id}
				type={displayPassword ? 'text' : 'password'}
				{...rest}
			/>
			{displayPass &&
				<StyledButtonDisplayPass
					onClick={handlerDisplayPass}
					type='button'
					aria-label='Exibir senha'
					aria-hidden={displayPassword}
					aria-labelledby='input-password'
				>
					{eyes}
				</StyledButtonDisplayPass>
			}
			<StyledLabel htmlFor={id}>
				{label}
			</StyledLabel>
		</StyledWrapper>
	);
};

export default Input;