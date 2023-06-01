import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;

class MoviePopularityServer {
	private httpsClient: HttpsServer;

	constructor() {
		this.httpsClient = new HttpsServer();
	}

	getDiscoverMoviePopularity<T>(language: string): Promise<T> {
		return this.httpsClient.get(`discover/movie?sort_by=popularity.desc&${API_KEY}&language=${language}`);
	}

	getByGender<T>(page?: number, language?: string, gender?: number[]): Promise<T> {
		return this.httpsClient.get(`
			discover/
			movie?${API_KEY}
			&language=${language}
			&sort_by=popularity.desc
			&certification=BR
			&include_adult=false
			&include_video=false
			&page=${page}
			&with_genres=${gender}
			&with_watch_monetization_types=flatrate
		`);
	}

	getDiscoverKnown<T>(id:number, language: string): Promise<T> {
		return this.httpsClient.get(`
			discover
			/movie
			?include_adult=false
			&include_video=false
			&language=${language}
			&page=1
			&${API_KEY}
			&sort_by=popularity.desc
			&with_people=${id}
		`);
	}
}

export default new MoviePopularityServer;