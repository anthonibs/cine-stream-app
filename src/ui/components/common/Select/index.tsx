import { IGenre } from 'data/@types/Genre';
import { Option, Selected } from './Select';
import { memo } from 'react';

interface IOrder {
	id: string;
	name: string;
}

interface ISelect {
	state: IGenre[] | IOrder[];
	setState: React.Dispatch<React.SetStateAction<string>>;
	defaultValue: string;
}

const Select = ({ state, setState, defaultValue }: ISelect) => {

	function handlerSelectValue(value: React.ChangeEvent<HTMLSelectElement>) {
		setState(value.target.value);
	}


	return (
		<Selected
			onChange={value => handlerSelectValue(value)}
			defaultChecked
			defaultValue={defaultValue}
		>
			<Option value="" disabled>Sem filtro</Option>
			{state?.map((item) => (
				<Option key={item.id} value={item.id}>{item.name}</Option>
			))}
		</Selected>
	);
};

export default memo(Select);