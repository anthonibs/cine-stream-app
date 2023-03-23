// Errors Customizados do Throw Error
export default class APIError extends Error {
	response: Response;

	constructor(response: Response, body: any) {
		super();
		this.name = 'APIError';
		this.response = response;
		this.message = body?.error || `${response.status} - ${response.statusText} `;
	}
}
