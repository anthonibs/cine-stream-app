import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;


class CreditsServer {
	private baseUrl: HttpsServer;

	constructor() {
		this.baseUrl = new HttpsServer('https://api.themoviedb.org/3/');
	}

	getCreditsAll<T>(type: 'movie' | 'tv', movieId: number, language: string): Promise<T> {
		return this.baseUrl.get(`${type}/${movieId}/credits?${API_KEY}&language=${language}`);
	}
}


export default new CreditsServer;