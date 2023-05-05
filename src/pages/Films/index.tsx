import {
	useCallback,
	useEffect,
	useMemo,
	useState
} from 'react';

import useLanguage from 'data/hooks/useLanguage';

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

import { IMovie } from 'data/interfaces/Movie';
import { IGenre } from 'data/interfaces/Genre';

import FilmsServer from 'data/services/FilmsServer';
import GenresServer from 'data/services/GenresServer';

import CardPoster from 'ui/components/common/CardPoster';
import Select from 'ui/components/common/Select';
import Accordion from 'ui/components/common/Accordion';
import MyButton from 'ui/components/common/MyButton';
import Paragraph from 'ui/components/common/Typography/Paragraph';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import orderBy from 'data/sortBys.json';

interface IFilms {
	page: number;
	results: IMovie[];
	total_pages: number;
	total_results: number;
}
interface IGenres {
	genres: IGenre[];
}


const Films = () => {
	const { language } = useLanguage();

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
			const data: IGenres = await GenresServer.getAll('movie', language);
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
					page: page,
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
		setPage(1);
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
					<Accordion title='Ordenar' openCollapse>
						<Fieldset>
							<TitleLabel>
								Ordenar Resultados Por
							</TitleLabel>
							<Select
								state={orderBy.order}
								setState={setSortBy}
								defaultValue={orderBy.order[0].id}
							/>
						</Fieldset>
					</Accordion>

					<Accordion title='Filtro'>
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
					</Accordion>

					<FilterSearchButton
						disabled={!fieldIsFilled}
					>
						Pesquisar
					</FilterSearchButton>
				</FormFilter>
			</Filter>

			<Container>
				<Wrapper>
					{films?.results.map((item: IMovie) => (
						<SkeletonTheme
							key={item.id}
							baseColor="#08293b"
							highlightColor="rgba(0, 0, 0, .07)"
						>
							{
								!isLoading
									?
									<CardPoster
										key={item.id}
										poster={item}
									/>
									:
									<Skeleton count={1} height={250} />
							}
						</SkeletonTheme>
					))}
				</Wrapper>

				{
					films?.results.length >= 20
					&& <MyButton
						mode='square'
						variant='primary'
						onClick={handleLoadMore}
					>
						<Paragraph size='md'>
							Carregar mais
						</Paragraph>
					</MyButton>
				}
			</Container>
		</GridColumn>

	);
};

export default Films;