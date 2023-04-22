import { IMovie } from './Movie';

export interface IList {
	created_by: string;
	description: string;
	favorite_count: number;
	id: string;
	iso_639_1: string
	item_count: number;
	items: IMovie[];
	name: string;
	poster_path: string;
}
