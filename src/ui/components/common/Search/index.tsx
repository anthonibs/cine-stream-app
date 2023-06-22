import { memo, useCallback, useEffect, useRef, useState } from 'react';

import useLanguage from 'data/hooks/useLanguage';

import MultiQuery from 'data/services/MultiQuery';

import {
	StyledContainer,
	StyledButtonCancel,
	StyledButtonSearch,
	StyledContainerSearch,
	StyledInputSearch,
	StyledLabel,
	StyledOverlay,
	StyledWrapper,
} from './Search';

import DisplaySearch from './DisplaySearch';

import { IMovie, ITotalPerson } from 'data/interfaces';

import { RiCloseCircleFill } from 'react-icons/ri';
import { SlMagnifier } from 'react-icons/sl';

interface ISearchTotal {
	page: number;
	results: [];
	total_pages: number;
	total_results: number;
}

const Search = () => {
	const { language } = useLanguage();

	const [searching, setSearching] = useState('');
	const [openFieldSearch, setOpenFieldSearch] = useState(false);
	const [searchList, setSearchList] = useState<ITotalPerson[] | IMovie[]>([]);

	const inputRef = useRef<HTMLInputElement>(null);
	const fieldIsFilled = searching.length > 0;

	const loadMultipleQueries = useCallback(async () => {
		try {
			const data = await MultiQuery.getQueryAll<ISearchTotal>('multi', searching, language);
			if (data.results.length === 0) {
				return [];
			}
			setSearchList(data.results);
		} catch (error) {
			console.error(error);
		}
	}, [language, searching]);

	function handlerOffFieldSearch() {
		if (!fieldIsFilled) setOpenFieldSearch(false);
	}

	function handlerClearFieldSearch() {
		setSearching('');
		inputRef.current?.focus();
	}

	function handlerClosed() {
		setSearching('');
		setOpenFieldSearch(!openFieldSearch);
	}

	useEffect(() => {
		loadMultipleQueries();
	}, [loadMultipleQueries]);

	return (
		<StyledContainer>
			<StyledWrapper>
				<StyledLabel className={openFieldSearch ? 'enable' : 'disable'}>
					<StyledButtonSearch
						type='button'
						onClick={() => setOpenFieldSearch(!openFieldSearch)}
						disabled={fieldIsFilled}
					>
						<SlMagnifier id='icon-search' />
					</StyledButtonSearch>

					<StyledInputSearch
						ref={inputRef}
						id='search'
						type='search'
						name='search-movie'
						className={openFieldSearch ? 'active-input' : 'disable-input'}
						placeholder='Títulos, atores ou gênero'
						aria-label='Pesquisar conteúdos do site, como títulos de filmes e séries por gênero e atores.'
						value={searching}
						onChange={(e) => setSearching(e.target.value)}
						onBlur={handlerOffFieldSearch}
					/>

					<StyledButtonCancel
						type='reset'
						onClick={handlerClearFieldSearch}
						className={fieldIsFilled ? 'enable-button' : ''}
						data-cancel='cancel-search'
						aria-labelledby='search'
						aria-label='Limpar campo de pesquisa'
					>
						<RiCloseCircleFill id='icon-clean' />
					</StyledButtonCancel>
				</StyledLabel>
			</StyledWrapper>

			<StyledContainerSearch className={fieldIsFilled ? 'open-search-list' : ''}>
				<StyledOverlay onClick={handlerClosed} />
				<DisplaySearch data={searchList} handlerClosed={handlerClosed} />
			</StyledContainerSearch>
		</StyledContainer>
	);
};

export default memo(Search);
