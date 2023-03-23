import { IList } from 'data/@types/ListMovie';
import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;



class ListServer {
	private httpClient: HttpsServer;

	constructor() {
		this.httpClient = new HttpsServer('https://api.themoviedb.org/3/');
	}

	async getList(page: number): Promise<IList> {
		return this.httpClient.get(`/list/${page}?${API_KEY}&language=pt-BR`, {
			method: 'GET'
		});
	}
}


export default new ListServer;