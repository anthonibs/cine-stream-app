import { IMovie } from './Movie';
import { ITvMovie } from './TvMovie';

export interface IPerson {
	adult: boolean;
	id: number;
	name: string;
	original_name: string
	media_type: string;
	popularity: number
	gender: number;
	known_for_department: string;
	profile_path: null | string;
	known_for: IMovie[];
}

export interface ITotalPerson extends ITvMovie {
	adult: boolean;
	id: number;
	name: string;
	original_name: string;
	media_type: string;
	popularity: number;
	gender: number;
	known_for_department: string;
	profile_path:  null | string;
	known_for: IMovie[];
}

export interface IPersonDetails {
  adult: boolean
  also_known_as: string[]
  biography: string
  birthday: string
  deathday: any
  gender: number
  homepage: string
  id: number
  imdb_id: string
  known_for_department: string
  name: string
  place_of_birth: string
  popularity: number
  profile_path: string
}
