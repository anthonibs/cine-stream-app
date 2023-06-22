import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;

class ListServer {
	private httpClient: HttpsServer;

	constructor() {
		this.httpClient = new HttpsServer();
	}

	getList<T>(page: number, language: string): Promise<T> {
		return this.httpClient.get(`/list/${page}?${API_KEY}&language=${language}`);
	}
}

export default new ListServer();
