import {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState
} from 'react';

import useLanguage from 'data/hooks/useLanguage';
import CardPoster from 'ui/components/common/CardPoster';
import {
	Container,
	Fieldset,
	Filter,
	FilterSearchButton,
	FormFilter,
	GridColumn,
	Input,
	Title,
	TitleLabel,
	Wrapper
} from './Films';

import { IMovie } from 'data/@types/Movie';
import { IGenre } from 'data/@types/Genre';

import FilmsServer from 'data/services/FilmsServer';
import GenresServer from 'data/services/GenresServer';

import Select from 'ui/components/common/Select';
import Collapse from 'ui/components/common/Collapse';
import { Button } from 'ui/components/common/Button/Button';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


interface IFilms {
	page: number;
	results: IMovie[];
	total_pages: number;
	total_results: number;
}


const Films = () => {
	const { language } = useLanguage();
	const lastRef = useRef(null);

	const sortBys = [
		{
			name: 'Popularidade (maior)',
			id: 'popularity.desc'
		},
		{
			name: 'Popularidade (menor)',
			id: 'popularity.asc'
		},
		{
			name: 'Avaliação (melhor)',
			id: 'vote_average.desc'
		},
		{
			name: 'Avaliação (pior)',
			id: 'vote_average.asc'
		},
		{
			name: 'Lançamento (novo)',
			id: 'revenue.asc'
		},
		{
			name: 'Lançamento (antigo)',
			id: 'revenue.desc'
		},
		{
			name: 'Título (A-Z)',
			id: 'original_title.asc'
		},
		{
			name: 'Título (Z-A)',
			id: 'original_title.desc'
		}
	];

	const [fullYear, setFullYear] = useState('');
	const [sortBy, setSortBy] = useState('');
	const [genre, setGenre] = useState('');
	const [page, setPage] = useState(1);

	const [genres, setGenres] = useState<IGenre[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [films, setFilms] = useState<IFilms>({
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

	const [error, setError] = useState('');

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
			const data: IFilms = await FilmsServer.getAllFilms(page, language, filter.genre, filter.sortBy, filter.fullYear);
			if (data.page === 1) {
				setFilms(data);
			}
			if (data.page > 1) {
				setFilms(prev => ({
					...data,
					results: [...prev.results, ...data.results]
				}));
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [filter.fullYear, filter.genre, language, page, filter.sortBy]);


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
			<Title>Filmes</Title>

			<Filter>
				<FormFilter onSubmit={handlerSearch}>
					<Collapse title='Ordenar'>
						<Fieldset>
							<TitleLabel>
								Ordenar Resultados Por
							</TitleLabel>
							<Select
								state={sortBys}
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
					{!isLoading && films?.results.map((item: IMovie) => (
						<SkeletonTheme
							key={item.id}
							baseColor="#08293b"
							highlightColor="rgba(0, 0, 0, .07)"
						>
							{
								!isLoading
									?
									<CardPoster key={item.id} poster={item} />
									:
									<Skeleton count={1} height={250} />
							}
						</SkeletonTheme>
					))}
				</Wrapper>

				{!!films?.results.length && <Button ref={lastRef} onClick={handleLoadMore}>Carregar mais</Button>}
			</Container>
		</GridColumn>

	);
};

export default Films;