import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;
const YEAR_FULL = new Date().getFullYear();

class SeriesServer {
	private httpClient: HttpsServer;

	constructor() {
		this.httpClient = new HttpsServer();
	}

	getAll<T>(
		page: number,
		language: string,
		gender: string,
		sortBy: string,
		year: string,
		status?: string,
		type?: string): Promise<T> {

		return this.httpClient.get(`
			discover/tv?${API_KEY}
			&language=${language}
			&sort_by=${sortBy ? sortBy : 'popularity.desc'}
			&first_air_date_year=${year ? year : YEAR_FULL}
			&page=${page}
			${gender && `&with_genres=${gender}`}
			&include_null_first_air_dates=false
			&with_watch_monetization_types=flatrate
			${status && `&with_status=${status}`}
			${type && `&with_type=${type}`}
		`
		);
	}

	getDetails<T>(tv_id: number, language: string): Promise<T> {
		const isoLanguage = language.slice(0, 2);
		return this.httpClient.get(`tv/${tv_id}?${API_KEY}&language=${language}&append_to_response=${isoLanguage}`);
	}
}


export default new SeriesServer;