// React e Hooks
import {
	useCallback,
	useEffect,
	useMemo,
	useState
} from 'react';

// Hooks e ContextApi próprio
import useLanguage from 'data/hooks/useLanguage';

// Estilos personalizados
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
} from './Series';

// Interfaces
import { IGenre } from 'data/interfaces/Genre';
import { ITvMovie } from 'data/interfaces/TvMovie';

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

// Arquivo json de lista de tradução textos
import orderBy from 'data/sortBys.json';
import filterByType from './filterByType.json';
import filterByStatus from './filterByStatus.json';

interface ISeriesProps {
	page: number;
	results: ITvMovie[];
	total_pages: number;
	total_results: number;
}

interface IGenres {
	genres: IGenre[];
}

const Series = () => {
	const { language } = useLanguage();

	const [fullYear, setFullYear] = useState('');
	const [sortBy, setSortBy] = useState('');
	const [genre, setGenre] = useState('');
	const [type, setType] = useState('');
	const [status, setStatus] = useState('');
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
		status: status,
		type: type
	});


	const loaderGenres = useCallback(async () => {
		try {
			const data: IGenres = await GenresServer.getAll('tv', language);
			setGenres(data.genres);
		} catch (error) {
			console.log(error);
		}
	}, [language]);

	const loaderTV = useCallback(async () => {
		try {
			setIsLoading(true);
			const data: ISeriesProps = await SeriesServer.getAllSeries(
				page,
				language,
				filter.genre,
				filter.sortBy,
				filter.fullYear,
				filter.status,
				filter.type
			);

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

	useEffect(() => {
		loaderTV();
		loaderGenres();
	}, [loaderTV, loaderGenres]);


	return (
		<GridColumn>
			<Title>Séries</Title>

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
								Por tipo
							</TitleLabel>
							<Select
								state={byTypes?.shows_by_type}
								setState={setType}
							/>
						</Fieldset>

						<Fieldset>
							<TitleLabel>
								Por status
							</TitleLabel>
							<Select
								state={byStatus?.shows_by_type}
								setState={setStatus}
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
						? series?.results.map((item: ITvMovie) =>
							<CardPosterSerie
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

				{
					series?.results.length >= 20
					&& <MyButton
						mode='square'
						variant='primary'
						onClick={handleLoadMore}
					>
						{!isLoading
							? <Paragraph size='md'>
								Carregar mais
							</Paragraph>
							: <Spinner scale={0.2} />}
					</MyButton>
				}
			</Container>
		</GridColumn>
	);
};

export default Series;