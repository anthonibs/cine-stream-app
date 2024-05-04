import HttpsServer from './HttpServer';

class MoviePopularityServer {
	private httpsClient: HttpsServer;

	constructor() {
		this.httpsClient = new HttpsServer();
	}

	getDiscoverMoviePopularity<T>(language: string): Promise<T> {
		return this.httpsClient.get(`discover/movie?sort_by=popularity.desc&language=${language}`);
	}

	getByGender<T>(page?: number, language?: string, gender?: number[]): Promise<T> {
		return this.httpsClient.get(
			`
			discover/
			movie
			?language=${language}
			&sort_by=popularity.desc
			&certification=BR
			&include_adult=false
			&include_video=false
			&page=${page}
			&with_genres=${gender}
			&with_watch_monetization_types=flatrate
		`
		);
	}

	getDiscoverKnown<T>(id: number, language: string): Promise<T> {
		return this.httpsClient.get(
			`
			discover
			/movie
			?include_adult=false
			&include_video=false
			&language=${language}
			&page=1
			&sort_by=popularity.desc
			&with_people=${id}
		`
		);
	}
}

export default new MoviePopularityServer();
