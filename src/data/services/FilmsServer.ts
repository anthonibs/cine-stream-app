import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;

class FilmsServer {
	private httpClient: HttpsServer;

	constructor() {
		this.httpClient = new HttpsServer('https://api.themoviedb.org/3/');
	}

	getFilm<T>(id: number, language: string): Promise<T> {
		return this.httpClient.get(`movie/${id}?${API_KEY}&language=${language}`);
	}
}

export default new FilmsServer;