import HttpsServer from './HttpServer';

const YEAR_FULL = new Date().getFullYear();

interface IFilter {
	fullYear: string;
	sortBy: string;
	genre: string;
	status: string;
	type: string;
}

class SeriesServer {
	private httpClient: HttpsServer;

	constructor() {
		this.httpClient = new HttpsServer();
	}

	getAll<T>(page: number, language: string, filter: IFilter): Promise<T> {
		return this.httpClient.get(
			`
			discover/tv
			?language=${language}
			&sort_by=${filter.sortBy ? filter.sortBy : 'popularity.desc'}
			&first_air_date_year=${filter.fullYear ? filter.fullYear : YEAR_FULL}
			&page=${page}
			${filter.genre && `&with_genres=${filter.genre}`}
			&include_null_first_air_dates=false
			&with_watch_monetization_types=flatrate
			${filter.status && `&with_status=${filter.status}`}
			${filter.type && `&with_type=${filter.type}`}
		`
		);
	}

	getDetails<T>(tv_id: number, language: string): Promise<T> {
		const isoLanguage = language.slice(0, 2);
		return this.httpClient.get(
			`tv/${tv_id}?language=${language}&append_to_response=${isoLanguage}`
		);
	}
}

export default new SeriesServer();
