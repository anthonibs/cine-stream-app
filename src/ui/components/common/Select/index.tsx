//  React e Hooks
import { memo, useState } from 'react';

// Estilização com styled-components
import * as S from './Select';

// React Icons
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

// Interfaces
interface IOption {
	id: string;
	name: string;
}

interface ISelect<T> {
	state: T;
	setState: React.Dispatch<React.SetStateAction<string>>;
	defaultValue?: string;
	position?: 'relative' | 'absolute' | 'fixed' | 'static' | 'sticky';
}

const Select = ({ state, setState, defaultValue, position }: ISelect<any>) => {
	const [toggleSelect, setToggleSelect] = useState(false);
	const [focusedOption, setFocusedOption] = useState<number | null>(null);
	const [selected, setSelected] = useState('');

	function handlerSelection(event: React.KeyboardEvent<HTMLButtonElement>) {
		if (!toggleSelect) return;

		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				setFocusedOption((prevState) => {
					if (prevState === null) {
						return 0;
					}
					if (prevState === state.length - 1) {
						return state.length - 1;
					}
					return (prevState += 1);
				});
				break;

			case 'ArrowUp':
				event.preventDefault();
				setFocusedOption((prevState) => {
					if (!prevState) {
						return 0;
					}
					return (prevState -= 1);
				});
				break;

			case 'Enter':
				event.preventDefault();
				setToggleSelect(!toggleSelect);

				if (focusedOption === null) {
					return 0;
				}

				setState(state[focusedOption].id);
				setSelected(state[focusedOption].name);

				if (selected === state[focusedOption].name) {
					setState('');
					setSelected('');
				}
				break;

			case 'Escape':
				event.preventDefault();
				setToggleSelect(!toggleSelect);
				break;

			default:
				break;
		}
	}

	function handlerSelected(event: IOption) {
		setState(event.id);
		setSelected(event.name);
		setFocusedOption(null);
		setToggleSelect(!toggleSelect);

		if (selected === event.name) {
			setState('');
			setSelected('');
		}
	}

	return (
		<S.Container>
			<S.Button
				className={toggleSelect ? 'rotate-arrow' : ''}
				aria-labelledby={selected}
				type='button'
				onClick={() => setToggleSelect(!toggleSelect)}
				onKeyDown={handlerSelection}
			>
				{selected || (defaultValue ? defaultValue : 'No selection')}
				<MdOutlineKeyboardArrowRight />
			</S.Button>

			<S.Select
				className={toggleSelect ? 'open-item-list' : ''}
				role='select'
				position={position}
				aria-hidden={!toggleSelect}
				onMouseLeave={() => setToggleSelect(false)}
			>
				{state?.map((option: IOption, index: number) => (
					<S.Option
						key={index}
						role='option'
						id={option.name}
						className={option.name === selected ? 'selected' : ''}
						focoAtivo={index === focusedOption}
						onClick={() => handlerSelected(option)}
					>
						{option.name}
					</S.Option>
				))}
			</S.Select>
		</S.Container>
	);
};

export default memo(Select);
