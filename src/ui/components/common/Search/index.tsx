import { memo, useRef, useState } from 'react';

import {
	ButtonCancelSearch,
	ButtonSearch,
	Container,
	Control,
	InputSearch,
} from './Search';


import { SlMagnifier } from 'react-icons/sl';
import { RiCloseCircleFill } from 'react-icons/ri';

const Search = () => {

	const [searching, setSearching] = useState<string>('');
	const [openFieldSearch, setOpenFieldSearch] = useState<boolean>(false);

	const inputRef = useRef<HTMLInputElement>(null);

	const fieldIsFilled = searching.length > 0;

	function handlerFieldSearch() {
		setOpenFieldSearch(prevState => !prevState);
	}

	function handlerOffFieldSearch() {
		if(!fieldIsFilled) setOpenFieldSearch(false);
	}

	function handlerClearFieldSearch() {
		setSearching('');
		inputRef.current?.focus();
	}

	return (
		<Container >
			<Control
				className={openFieldSearch ? 'enable' : 'disable'}
			>
				<ButtonSearch
					type='button'
					onClick={handlerFieldSearch}
					disabled={fieldIsFilled}
				>
					<SlMagnifier id='icon-search' />
				</ButtonSearch>

				<InputSearch
					ref={inputRef}
					id='search'
					type="search"
					name='search-movie'
					className={openFieldSearch ? 'active-input' : 'disable-input'}
					placeholder='Títulos, atores ou gênero'
					aria-label="Pesquisar conteúdos do site, como títulos de filmes e séries por gênero e atores."
					value={searching}
					onChange={(e) => setSearching(e.target.value)}
					onBlur={handlerOffFieldSearch}
				/>

				<ButtonCancelSearch
					type='reset'
					onClick={handlerClearFieldSearch}
					className={fieldIsFilled ? 'enable-button' : ''}
					data-cancel='cancel-search'
					aria-labelledby='search'
					aria-label='Limpar campo de pesquisa'
				>
					<RiCloseCircleFill id='icon-clean' />
				</ButtonCancelSearch>
			</Control>
		</Container >
	);
};

export default memo(Search);