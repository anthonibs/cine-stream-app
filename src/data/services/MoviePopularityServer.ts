import { IMoviePopulatiry } from 'data/@types/MoviePopularity';
import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;


class MoviePopularityServer {
	private httpClient: HttpsServer;

	constructor() {
		this.httpClient = new HttpsServer('https://api.themoviedb.org/3/');
	}

	async getMoviePopularity(language: string): Promise<IMoviePopulatiry> {
		return this.httpClient.get(`discover/movie?sort_by=popularity.desc&${API_KEY}&language=${language}`);
	}
}

export default new MoviePopularityServer;