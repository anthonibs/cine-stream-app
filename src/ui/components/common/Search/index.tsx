import { memo, useCallback, useEffect, useRef, useState } from 'react';

import useLanguage from 'data/hooks/useLanguage';

import MultiQuery from 'data/services/MultiQuery';

import * as S from './Search';

import { RiCloseCircleFill } from 'react-icons/ri';
import { SlMagnifier } from 'react-icons/sl';

import DisplaySearch from './DisplaySearch';
import { IMovie, ITotalPerson } from 'data/interfaces';

interface ISearchTotal {
	page: number;
	results: [];
	total_pages: number;
	total_results: number;
}

const Search = () => {
	const { language } = useLanguage();

	const inputRef = useRef<HTMLInputElement>(null);

	const [openFieldSearch, setOpenFieldSearch] = useState(false);
	const [query, setQuery] = useState('');
	const [searchList, setSearchList] = useState<ITotalPerson[] | IMovie[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const fieldIsFilled = query.length > 0;

	const fetchingDataMultipleQueries = useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await MultiQuery.getQueryAll<ISearchTotal>('multi', query, language);
			if (data.results.length === 0) {
				return [];
			}
			setSearchList(data.results);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}, [language, query]);

	function handlerOffFieldSearch() {
		if (!fieldIsFilled) setOpenFieldSearch(false);
	}

	function handlerClearFieldSearch() {
		setQuery('');
		inputRef.current?.focus();
	}

	function handlerClosed() {
		setQuery('');
		setOpenFieldSearch(!openFieldSearch);
	}
	useEffect(() => {
		fetchingDataMultipleQueries();
	}, [fetchingDataMultipleQueries]);

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
						value={query}
						onChange={(e) => setQuery(e.target.value)}
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
				<DisplaySearch handlerClosed={handlerClosed} data={searchList} loader={isLoading} />
			</S.ContainerSearch>
		</S.Container>
	);
};

export default memo(Search);
