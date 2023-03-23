import { IMovie } from './Movie';

export interface IMoviePopulatiry {
	page: number
	results: IMovie[]
	total_pages: number;
	total_results: number;
}