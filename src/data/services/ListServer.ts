import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

class ListServer {
	private httpClient: HttpsServer;

	constructor() {
		this.httpClient = new HttpsServer('https://api.themoviedb.org/3/');
	}

	getList<T>(page: number, language: string): Promise<T> {
		return this.httpClient.get(`/list/${page}?${API_KEY}&language=${language}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${API_TOKEN}`
			}
		});
	}
}

export default new ListServer;