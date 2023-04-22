import HttpsServer from './HttpServer';
const API_KEY = process.env.REACT_APP_API_KEY;

class SeriesServer {
	private httpClient: HttpsServer;

	constructor() {
		this.httpClient = new HttpsServer('https://api.themoviedb.org/3/');
	}

	getAllSeries<T>(page: number, language: string, gender: string, sortBy: string): Promise<T> {
		return this.httpClient.get(`discover/tv?${API_KEY}
				&language=${language}
				&sort_by=${sortBy = 'popularity.desc' && sortBy}
				&include_null_first_air_dates=false
				&page=${page}
				&timezone=${'America%2FNew_York'}
				&${gender && `&with_genres=${gender}`}
				&with_watch_monetization_types=flatrate
				&with_status=0
				&with_type=0
			`
		);
	}

	getSerie<T>(id: number, language: string): Promise<T> {
		return this.httpClient.get(`tv/${id}?${API_KEY}&language=${language} `);
	}
}

export default new SeriesServer;