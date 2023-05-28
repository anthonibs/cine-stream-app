import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;

class ByGenderServer {
	private httpsClient: HttpsServer;

	constructor() {
		this.httpsClient = new HttpsServer();
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
}


export default new ByGenderServer;