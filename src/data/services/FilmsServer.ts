import HttpsServer from './HttpServer';

interface IFilter {
	fullYear: string;
	sortBy: string;
	genre: string;
}

class FilmsServer {
	private httpsClient: HttpsServer;

	constructor() {
		this.httpsClient = new HttpsServer();
	}

	getAllFilms<T>(page: number, language: string, option: IFilter): Promise<T> {
		return this.httpsClient.get(
			`
			discover/
			movie
			?language=${language}
			&sort_by=${option.sortBy ? option.sortBy : 'popularity.desc'}
			&include_adult=false&include_video=false
			&page=${page}
			&year=${option.fullYear}
			&${!!option.genre && `&with_genres=${option.genre}`}
			&with_watch_monetization_types=flatrate`
		);
	}

	getFilm<T>(id: number, language: string): Promise<T> {
		return this.httpsClient.get(`movie/${id}?language=${language}`);
	}
}

export default new FilmsServer();
