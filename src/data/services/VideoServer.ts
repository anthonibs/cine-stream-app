import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;


class VideoServer {
	private baseUrl: HttpsServer;

	constructor() {
		this.baseUrl = new HttpsServer('https://api.themoviedb.org/3/');
	}

	getFindAllVideo<T>(type: 'movie' | 'tv', id: number, language: string): Promise<T> {
		return this.baseUrl.get(`${type}/${id}/videos?${API_KEY}&language=${language}`);
	}
}


export default new VideoServer;
