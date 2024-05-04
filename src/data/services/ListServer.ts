import HttpsServer from './HttpServer';

class ListServer {
	private httpClient: HttpsServer;

	constructor() {
		this.httpClient = new HttpsServer();
	}

	getList<T>(page: number, language: string): Promise<T> {
		return this.httpClient.get(`/list/${page}?language=${language}`);
	}
}

export default new ListServer();
