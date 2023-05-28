import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;

class FilmsServer {
	private httpsClient: HttpsServer;

	constructor() {
		this.httpsClient = new HttpsServer();
	}

	getAllFilms<T>(page: number, language: string, gender: string, sortBy: string, year: string): Promise<T> {
		return this.httpsClient.get(`
			discover/
			movie?${API_KEY}
			&language=${language}
			&sort_by=${sortBy ? sortBy : 'popularity.desc'}
			&include_adult=false&include_video=false
			&page=${page}
			&year=${year}
			&${!!gender && `&with_genres=${gender}`}
			&with_watch_monetization_types=flatrate`
		);
	}

	getFilm<T>(id: number, language: string): Promise<T> {
		return this.httpsClient.get(`movie/${id}?${API_KEY}&language=${language} `);
	}
}

export default new FilmsServer;