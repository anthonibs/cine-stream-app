import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Container, Fieldset, Filter, FilterSearchButton, FormFilter, GridColumn, Input, Title, TitleLabel, Wrapper } from './Series';
import Collapse from 'ui/components/common/Collapse';
import Select from 'ui/components/common/Select';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import GenresServer from 'data/services/GenresServer';
import useLanguage from 'data/hooks/useLanguage';
import { IGenre } from 'data/interfaces/Genre';
import { Button } from 'ui/components/common/Button';

import orderBy from 'data/sortBys.json';
import SeriesServer from 'data/services/SeriesServer';
import { ISerie } from 'data/interfaces/Serie';
import CardPosterSerie from 'ui/components/common/CardPosterSerie';

interface ISeriesProps {
	page: number;
	results: ISerie[];
	total_pages: number;
	total_results: number;
}

const Series = () => {

	const { language } = useLanguage();
	const lastRef = useRef(null);

	const [fullYear, setFullYear] = useState('');
	const [sortBy, setSortBy] = useState('');
	const [genre, setGenre] = useState('');
	const [page, setPage] = useState(1);

	const [genres, setGenres] = useState<IGenre[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [series, setSeries] = useState<ISeriesProps>({
		page: 0,
		results: [],
		total_pages: 0,
		total_results: 0
	});

	const [filter, setFilter] = useState({
		fullYear: fullYear,
		sortBy: sortBy,
		genre: genre,
	});


	const loaderGenres = useCallback(async () => {
		try {
			const data: any = await GenresServer.getAll(language);
			setGenres(data.genres);
		} catch (error) {
			console.log(error);
		}
	}, [language]);


	const loaderFilms = useCallback(async () => {
		try {
			setIsLoading(true);
			const data: ISeriesProps = await SeriesServer.getAllSeries(page, language, filter.genre, filter.sortBy);
			if (data.page === 1) {
				setSeries(data);
			}
			if (data.page > 1) {
				setSeries(prev => ({
					...data,
					results: [...prev.results, ...data.results]
				}));
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [filter.genre, language, page, filter.sortBy]);


	function handleLoadMore() {
		setPage(prev => prev + 1);
	}


	function handlerSearch(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setFilter({
			fullYear: fullYear,
			sortBy: sortBy,
			genre: genre,
		});
	}


	const fieldIsFilled = useMemo(() => {
		return fullYear !== '' || genre !== '' || sortBy !== '';
	}, [fullYear, genre, sortBy]);


	useEffect(() => {
		loaderFilms();
		loaderGenres();
	}, [loaderFilms, loaderGenres]);


	return (
		<GridColumn>
			<Title>Séries</Title>

			<Filter>
				<FormFilter onSubmit={handlerSearch}>
					<Collapse title='Ordenar'>
						<Fieldset>
							<TitleLabel>
								Ordenar Resultados Por
							</TitleLabel>
							<Select
								state={orderBy.order}
								setState={setSortBy}
							/>
						</Fieldset>
					</Collapse>

					<Collapse title='Filtro'>
						<Fieldset>
							<TitleLabel>
								Gêneros
							</TitleLabel>
							<Select
								state={genres}
								setState={setGenre}
								defaultValue={genre}
							/>
						</Fieldset>

						<Fieldset>
							<TitleLabel>
								Pesquisar por ano
							</TitleLabel>

							<Input
								type="text"
								maxLength={4}
								pattern="[0-9]{4}"
								placeholder='aaaa'
								value={fullYear}
								onChange={e => setFullYear(e.target.value)}
							/>
						</Fieldset>
					</Collapse>

					<FilterSearchButton
						disabled={!fieldIsFilled}
					>
						Pesquisar
					</FilterSearchButton>
				</FormFilter>
			</Filter>

			<Container>
				<Wrapper>
					{series?.results.map((item: ISerie) => (
						<SkeletonTheme
							key={item.id}
							baseColor="#08293b"
							highlightColor="rgba(0, 0, 0, .07)"
						>
							{
								!isLoading
									?
									<CardPosterSerie key={item.id} poster={item} />
									:
									<Skeleton count={1} height={250} />
							}
						</SkeletonTheme>
					))}
				</Wrapper>

				{!!series?.results.length && <Button ref={lastRef} onClick={handleLoadMore}>Carregar mais</Button>}
			</Container>
		</GridColumn>
	);
};

export default Series;