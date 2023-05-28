// React e Hooks
import {
	useCallback,
	useEffect,
	useMemo,
	useState
} from 'react';

// Hooks e ContextApi próprio
import useLanguage from 'data/hooks/useLanguage';
import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';
import orderBy from 'data/sortBys.json';

// Estilos próprio
import {
	StyledContainer,
	StyledFieldset,
	StyledFilter,
	StyledFilterSearchButton,
	StyledFormFilter,
	StyledGridColumn,
	StyledInput,
	StyledMessage,
	StyledTitleLabel,
	StyledWrapper
} from './Films';

// Interfaces
import { IMovie } from 'data/interfaces/Movie';
import { IGenre } from 'data/interfaces/Genre';
import { IError } from 'data/interfaces/Error';
import { IPage } from 'data/interfaces';

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
import Heading from 'ui/components/common/Typography/Heading';

// Arquivo json de lista de tradução textos
import { combinedListFavorites } from 'utils';

interface IGenres {
	genres: IGenre[];
}


const Films = () => {
	const { language } = useLanguage();
	const { listMovie } = useMyFavoritesList();

	const [fullYear, setFullYear] = useState('');
	const [sortBy, setSortBy] = useState('');
	const [genre, setGenre] = useState('');
	const [page, setPage] = useState(1);

	const [genres, setGenres] = useState<IGenre[]>([]);
	const [films, setFilms] = useState<IPage<IMovie>>({
		page: 0,
		results: [],
		total_pages: 0,
		total_results: 0,
	});

	const [filter, setFilter] = useState({
		fullYear: fullYear,
		sortBy: sortBy,
		genre: genre,
	});

	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<IError>({} as IError);


	const loaderGenres = useCallback(async () => {
		try {
			const data = await GenresServer.getAll<IGenres>('movie', language);
			setGenres(data.genres);
		} catch (error) {
			console.log(error);
		}
	}, [language]);


	const loaderFilms = useCallback(async () => {
		try {
			setIsLoading(true);
			// Vem duas resposta vê como resolver!
			const data: any = await FilmsServer.getAllFilms(page, language, filter.genre, filter.sortBy, filter.fullYear);
			if (data.status_code === 34) {
				setError(data);
				throw new Error(data.status_message);
			}
			if (data.page === 1) {
				setFilms(data);
			}
			if (data.page > 1) {
				setFilms(prev => ({
					...data,
					page: page,
					results: [...prev.results, ...data.results],
					success: true,
				}));
			}
		} catch (error) {
			setError(prev => ({
				success: false,
				status_code: prev.status_code,
				status_message: 'Error connecting to server.'
			}));
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


	function isEmptyObject<T extends object>(obj: T): boolean {
		return !!Object.keys(obj).length;
	}


	useEffect(() => {
		loaderFilms();
		loaderGenres();
	}, [loaderFilms, loaderGenres]);


	return (
		<StyledGridColumn>
			<Heading component='h1' variant='h2' color='secondary'>
				Filmes
			</Heading>

			<StyledFilter>
				<StyledFormFilter onSubmit={handlerSearch}>
					<Accordion title='Ordenar' openCollapse>
						<StyledFieldset>
							<StyledTitleLabel>
								Ordenar Resultados Por
							</StyledTitleLabel>
							<Select
								state={sortResults?.order}
								setState={setSortBy}
								defaultValue={sortResults?.order[0].name}
							/>
						</StyledFieldset>
					</Accordion>

					<Accordion title='Filtro'>
						<StyledFieldset>
							<StyledTitleLabel>
								Gêneros
							</StyledTitleLabel>
							<Select
								state={genres}
								setState={setGenre}
							/>
						</StyledFieldset>

						<StyledFieldset>
							<StyledTitleLabel>
								Pesquisar por ano
							</StyledTitleLabel>

							<StyledInput
								type="text"
								maxLength={4}
								pattern="[0-9]{4}"
								placeholder='aaaa'
								value={fullYear}
								onChange={e => setFullYear(e.target.value)}
							/>
						</StyledFieldset>
					</Accordion>

					<StyledFilterSearchButton
						disabled={!fieldIsFilled}
					>
						{!isLoading
							? 'Pesquisar'
							: <Spinner scale={0.2} />
						}
					</StyledFilterSearchButton>
				</StyledFormFilter>
			</StyledFilter>

			{!isEmptyObject<IError>(error)
				? <StyledContainer>
					<StyledWrapper>
						{!isLoading
							? combinedListFavorites(films?.results, listMovie).map((item: IMovie) =>
								<CardPoster
									key={item.id}
									poster={item}
								/>)
							: Array(20).fill(20).map((skeleton, index) => (
								<div key={index}>
									<SkeletonCustom count={1} height={220} borderRadius={7} />
									<SkeletonCustom count={1} />
									<SkeletonCustom count={1} width={100} />
									<SkeletonCustom count={1} />
								</div>
							))}
					</StyledWrapper>

					{films.results.length >= 20
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
				</StyledContainer>
				: <StyledMessage>
					{error.status_message}
				</StyledMessage>
			}
		</StyledGridColumn>
	);
};

export default Films;