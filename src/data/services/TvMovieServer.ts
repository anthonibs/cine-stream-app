import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;


class TvMovieServer {
	private httpClient: HttpsServer;

	constructor() {
		this.httpClient = new HttpsServer();
	}

	getTvDetails<T>(tv_id: number, language: string): Promise<T> {
		const isoLanguage = language.slice(0, 2);
		return this.httpClient.get(`tv/${tv_id}?${API_KEY}&language=${language}&append_to_response=${isoLanguage}`);
	}
}


export default new TvMovieServer;