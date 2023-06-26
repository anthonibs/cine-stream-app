import { memo, useCallback, useEffect, useRef, useState } from 'react';

import useLanguage from 'data/hooks/useLanguage';

import MultiQuery from 'data/services/MultiQuery';

import { IMovie, ITotalPerson } from 'data/interfaces';

import * as S from './Search';

import { RiCloseCircleFill } from 'react-icons/ri';
import { SlMagnifier } from 'react-icons/sl';

import DisplaySearch from './DisplaySearch';

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
		<S.Container>
			<S.Wrapper>
				<S.Label className={openFieldSearch ? 'enable' : 'disable'}>
					<S.ButtonSearch
						type='button'
						onClick={() => setOpenFieldSearch(!openFieldSearch)}
						disabled={fieldIsFilled}
					>
						<SlMagnifier id='icon-search' />
					</S.ButtonSearch>

					<S.InputSearch
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

					<S.ButtonCancel
						type='reset'
						onClick={handlerClearFieldSearch}
						className={fieldIsFilled ? 'enable-button' : ''}
						data-cancel='cancel-search'
						aria-labelledby='search'
						aria-label='Limpar campo de pesquisa'
					>
						<RiCloseCircleFill id='icon-clean' />
					</S.ButtonCancel>
				</S.Label>
			</S.Wrapper>

			<S.ContainerSearch className={fieldIsFilled ? 'open-search-list' : ''}>
				<S.Overlay onClick={handlerClosed} />
				<DisplaySearch data={searchList} handlerClosed={handlerClosed} />
			</S.ContainerSearch>
		</S.Container>
	);
};

export default memo(Search);
