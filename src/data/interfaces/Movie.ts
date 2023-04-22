import { IGenre } from './Genre';

export interface IMovie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	media_type: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;

	// Optional
	isFavorite?: boolean;
}

export interface IMoveDetails extends IMovie {
	belongs_to_collection: IBelongsToCollection;
	budget: number;
	genres: IGenre[];
	homepage: string;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	production_companies: IProductionCompany[];
	production_countries: IProductionCountry[];
	revenue: number;
	runtime: number;
	spoken_languages: ISpokenLanguage[];
	status: string;
	tagline: string;
}

export interface IBelongsToCollection {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
}

export interface IProductionCompany {
	id: number;
	logo_path?: string;
	name: string;
	origin_country: string;
}

export interface IProductionCountry {
	iso_3166_1: string;
	name: string;
}

export interface ISpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}
