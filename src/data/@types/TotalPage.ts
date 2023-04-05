import { IMovie } from './Movie';

export interface ITotalPage {
	page: number;
	results: IMovie[];
	total_pages: number;
	total_results: number;
}