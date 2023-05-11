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
