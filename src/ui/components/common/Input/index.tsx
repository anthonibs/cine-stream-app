import { useMemo, useState } from 'react';

import { RiEye2Line, RiEyeCloseLine } from 'react-icons/ri';

import * as S from './Input';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	displayPass?: boolean;
	label: string;
	id?: string;
}

const Input = ({ displayPass, label, id, ...rest }: InputProps) => {
	const [displayPassword, setDisplayPassword] = useState(false);

	function handlerDisplayPass() {
		setDisplayPassword((prevState) => !prevState);
	}

	const eyes = useMemo(() => {
		return displayPassword ? <RiEye2Line /> : <RiEyeCloseLine />;
	}, [displayPassword]);

	return (
		<S.Wrapper>
			<S.Input id={id} type={displayPassword ? 'text' : 'password'} {...rest} />
			{displayPass && (
				<S.ButtonDisplayPass
					onClick={handlerDisplayPass}
					type='button'
					aria-label='Exibir senha'
					aria-hidden={displayPassword}
					aria-labelledby='input-password'
				>
					{eyes}
				</S.ButtonDisplayPass>
			)}
			<S.Label htmlFor={id}>{label}</S.Label>
		</S.Wrapper>
	);
};

export default Input;
