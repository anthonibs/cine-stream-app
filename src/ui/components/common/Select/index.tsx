//  React
import { memo } from 'react';

// Estilização com styled-components
import { Option, Selected } from './Select';

interface IOption {
	id: string;
	name: string;
}

interface ISelect<T> {
	state: T;
	setState: React.Dispatch<React.SetStateAction<string>>;
	defaultValue?: string;
}

const Select = ({ state, setState, defaultValue }: ISelect<any>) => {

	function handlerSelectValue(value: React.ChangeEvent<HTMLSelectElement>) {
		setState(value.target.value);
	}

	return (
		<Selected
			onChange={value => handlerSelectValue(value)}
			defaultChecked
			defaultValue={defaultValue}
		>
			<Option value="" >Sem filtro</Option>
			{state?.map((option: IOption) => (
				<Option
					key={option.id}
					value={option.id}>
					{option.name}
				</Option>
			))}
		</Selected>
	);
};

export default memo(Select);