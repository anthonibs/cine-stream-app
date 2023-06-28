import { IGenre } from './Genre';
import { IProductionCompany, IProductionCountry, ISpokenLanguage } from './Production';

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
	alreadyWatched?: boolean;
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
