import { ITvMovie } from './TvMovie';

export interface IAlreadyWatched extends ITvMovie {
	first_air_date: string;
	origin_country: string[];
	name: string;
	original_name: string;
}
