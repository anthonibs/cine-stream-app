import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;

class MoviePopularityServer {
	private httpClient: HttpsServer;

	constructor() {
		this.httpClient = new HttpsServer('https://api.themoviedb.org/3/');
	}

	getMoviePopularity<T>(language: string): Promise<T> {
		return this.httpClient.get(`discover/movie?sort_by=popularity.desc&${API_KEY}&language=${language}`);
	}
}

export default new MoviePopularityServer;