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

// Estilos personalizados
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
	StyledWrapper,
} from './Series';

// Interfaces
import { IError, IGenre, IPage, ITvMovie } from 'data/interfaces';

// Serve para chamar os endpoints da api TMDB
import GenresServer from 'data/services/GenresServer';
import SeriesServer from 'data/services/SeriesServer';

// Componente personalizados
import Select from 'ui/components/common/Select';
import Accordion from 'ui/components/common/Accordion';
import CardPosterSerie from 'ui/components/common/CardPosterSerie';
import MyButton from 'ui/components/common/MyButton';
import Paragraph from 'ui/components/common/Typography/Paragraph';
import Spinner from 'ui/components/common/Spinner';
import SkeletonCustom from 'ui/components/common/SkeletonCustom';
import Heading from 'ui/components/common/Typography/Heading';

// Arquivo json de lista de tradução textos
import orderBy from 'data/sortBys.json';
import filterByType from './filterByType.json';
import filterByStatus from './filterByStatus.json';

import { combinedListFavorites } from 'utils';

interface IGenres {
	genres: IGenre[];
}

const Series = () => {
	const { language } = useLanguage();
	const { listSerie } = useMyFavoritesList();

	const [fullYear, setFullYear] = useState('');
	const [sortBy, setSortBy] = useState('');
	const [genre, setGenre] = useState('');
	const [type, setType] = useState('');
	const [status, setStatus] = useState('');
	const [page, setPage] = useState(1);

	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<IError>({} as IError);

	const [genres, setGenres] = useState<IGenre[]>([]);
	const [series, setSeries] = useState<IPage<ITvMovie>>({
		page: 0,
		results: [],
		total_pages: 0,
		total_results: 0
	});
	const [filter, setFilter] = useState({
		fullYear: fullYear,
		sortBy: sortBy,
		genre: genre,
		status: status,
		type: type
	});


	const loaderGenres = useCallback(async () => {
		try {
			const data = await GenresServer.getAll<IGenres>('tv', language);
			setGenres(data.genres);
		} catch (error) {
			console.log(error);
		}
	}, [language]);


	const loaderTV = useCallback(async () => {
		try {
			setIsLoading(true);
			const data: any = await SeriesServer.getAll(
				page,
				language,
				filter.genre,
				filter.sortBy,
				filter.fullYear,
				filter.status,
				filter.type
			);
			if (data.status_code === 34) {
				setError(data);
				throw new Error(data.status_message);
			}
			if (data.page === 1) {
				setSeries(data);
			}
			if (data.page > 1) {
				setSeries(prev => ({
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
	}, [
		page,
		language,
		filter.genre,
		filter.sortBy,
		filter.fullYear,
		filter.status,
		filter.type
	]);


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
			status: status,
			type: type
		});
	}

	const byTypes = useMemo(() => {
		return filterByType.language.find(type => type.code === language);
	}, [language]);

	const byStatus = useMemo(() => {
		return filterByStatus.language.find(status => status.code === language);
	}, [language]);

	const fieldIsFilled = useMemo(() => {
		return fullYear !== '' || genre !== '' || sortBy !== '' || type !== '' || status !== '';
	}, [fullYear, genre, sortBy, status, type]);

	const sortResults = useMemo(() => {
		return orderBy.language.find(code => code.code === language);
	}, [language]);

	function isEmptyObject<T extends object>(obj: T): boolean {
		return !!Object.keys(obj).length;
	}


	useEffect(() => {
		loaderTV();
		loaderGenres();
	}, [loaderTV, loaderGenres]);


	return (
		<StyledGridColumn>
			<Heading component='h1' variant='h2' color='secondary'>
				Séries
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
								Por tipo
							</StyledTitleLabel>
							<Select
								state={byTypes?.shows_by_type}
								setState={setType}
							/>
						</StyledFieldset>

						<StyledFieldset>
							<StyledTitleLabel>
								Por status
							</StyledTitleLabel>
							<Select
								state={byStatus?.shows_by_type}
								setState={setStatus}
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
							? combinedListFavorites(series?.results, listSerie).map((item: ITvMovie) =>
								<CardPosterSerie
									key={item.id}
									poster={item}
								/>)
							: Array(20).fill(20).map((_, index) => (
								<div key={index}>
									<SkeletonCustom count={1} height={220} borderRadius={7} />
									<SkeletonCustom count={1} />
									<SkeletonCustom count={1} width={100} />
									<SkeletonCustom count={1} />
								</div>
							))}
					</StyledWrapper>

					{series?.results.length >= 20
						&& <MyButton
							mode='square'
							variant='primary'
							onClick={handleLoadMore}
						>
							{!isLoading
								? <Paragraph size='md'>
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

		</StyledGridColumn >
	);
};

export default Series;