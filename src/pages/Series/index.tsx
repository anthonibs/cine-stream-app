import { useCallback, useEffect, useMemo, useState } from 'react';

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

import Accordion from 'ui/components/common/Accordion';
import Select from 'ui/components/common/Select';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import GenresServer from 'data/services/GenresServer';
import useLanguage from 'data/hooks/useLanguage';
import { IGenre } from 'data/interfaces/Genre';

import orderBy from 'data/sortBys.json';
import SeriesServer from 'data/services/SeriesServer';
import { ITvMovie } from 'data/interfaces/TvMovie';
import CardPosterSerie from 'ui/components/common/CardPosterSerie';

import filterByType from './filterByType.json';
import filterByStatus from './filterByStatus.json';
import MyButton from 'ui/components/common/MyButton';
import Paragraph from 'ui/components/common/Typography/Paragraph';

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
								state={orderBy.order}
								setState={setSortBy}
								defaultValue={orderBy?.order[0].id}
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
								Por tipo
							</TitleLabel>
							<Select
								state={byTypes?.shows_by_type}
								setState={setType}
								defaultValue={type}
							/>
						</Fieldset>

						<Fieldset>
							<TitleLabel>
								Por status
							</TitleLabel>
							<Select
								state={byStatus?.shows_by_type}
								setState={setStatus}
								defaultValue={status}
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
					{series?.results.map((item: ITvMovie) => (
						<SkeletonTheme
							key={item.id}
							baseColor="#08293b"
							highlightColor="rgba(0, 0, 0, .07)"
						>
							{
								!isLoading
									?
									<CardPosterSerie poster={item} />
									:
									<Skeleton count={1} height={250} />
							}
						</SkeletonTheme>
					))}
				</Wrapper>

				{
					series?.results.length >= 20
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

export default Series;