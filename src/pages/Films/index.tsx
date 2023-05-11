// React e Hooks
import {
	useCallback,
	useEffect,
	useMemo,
	useState
} from 'react';

// Hooks e ContextApi próprio
import useLanguage from 'data/hooks/useLanguage';

// Estilos próprio
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

// Interfaces
import { IMovie } from 'data/interfaces/Movie';
import { IGenre } from 'data/interfaces/Genre';

// Server chamada endpoint de API externa TMDB
import FilmsServer from 'data/services/FilmsServer';
import GenresServer from 'data/services/GenresServer';

// Componentes próprios
import CardPoster from 'ui/components/common/CardPoster';
import Select from 'ui/components/common/Select';
import Accordion from 'ui/components/common/Accordion';
import MyButton from 'ui/components/common/MyButton';
import Paragraph from 'ui/components/common/Typography/Paragraph';
import Spinner from 'ui/components/common/Spinner';
import SkeletonCustom from 'ui/components/common/SkeletonCustom';

// Arquivo json de lista de tradução textos
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

	const sortResults = useMemo(() => {
		return orderBy.language.find(code => code.code === language);
	}, [language]);

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
								state={sortResults?.order}
								setState={setSortBy}
								defaultValue={sortResults?.order[0].name}
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
						{!isLoading
							? 'Pesquisar'
							: <Spinner scale={0.2} />
						}
					</FilterSearchButton>
				</FormFilter>
			</Filter>

			<Container>
				<Wrapper>
					{!isLoading
						? films?.results.map((item: IMovie) =>
							<CardPoster
								key={item.id}
								poster={item}
							/>)
						: Array(20).fill(20).map((skeleton, index) => (
							<div key={index}>
								<SkeletonCustom count={1} height={220} borderRadius={7} />
								<SkeletonCustom count={1} />
								<SkeletonCustom count={1} width={100}  />
								<SkeletonCustom count={1} />
							</div>
						))}
				</Wrapper>

				{films?.results.length >= 20
					&& <MyButton
						mode='square'
						variant='primary'
						onClick={handleLoadMore}
					>
						{!isLoading ?
							<Paragraph size='md'>
								Carregar mais
							</Paragraph>
							: <Spinner scale={0.2} />
						}
					</MyButton>
				}
			</Container>
		</GridColumn>
	);
};

export default Films;