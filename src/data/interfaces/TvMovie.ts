import { IGenre } from './Genre';
import { IProductionCompany, IProductionCountry, ISpokenLanguage } from './Production';

export interface ITvMovie {
	poster_path: string;
	popularity: number;
	id: number;
	backdrop_path: null | string;
	vote_average: number;
	overview: string;
	first_air_date: string;
	origin_country: string[];
	genre_ids: number[];
	original_language: string;
	vote_count: number;
	name: string;
	original_name: string;
	// Optional
	isFavorite?: boolean;
	alreadyWatched?: boolean;
}

export interface ITvMovieDetails extends ITvMovie {
	created_by: ICreatedBy[];
	episode_run_time: number[];
	genres: IGenre[];
	homepage: string;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: ILastEpisodeToAir;
	next_episode_to_air: any;
	networks: INetwork[];
	number_of_episodes: number;
	number_of_seasons: number;
	production_companies: IProductionCompany[];
	production_countries: IProductionCountry[];
	seasons: Season[];
	spoken_languages: ISpokenLanguage[];
	status: string;
	tagline: string;
	type: string;
}

export interface ICreatedBy {
	id: number;
	credit_id: string;
	name: string;
	gender: number;
	profile_path: string;
}

export interface ILastEpisodeToAir {
	air_date: string;
	episode_number: number;
	id: number;
	name: string;
	overview: string;
	production_code: string;
	season_number: number;
	still_path: string;
	vote_average: number;
	vote_count: number;
}

export interface INetwork {
	name: string;
	id: number;
	logo_path: string;
	origin_country: string;
}

export interface Season {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	season_number: number;
}
