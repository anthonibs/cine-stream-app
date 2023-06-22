// Errors Customizados do Throw Error
export default class APIError extends Error {
	response: Response;

	constructor(response: Response, body: any) {
		super();
		this.name = 'APIError';
		this.response = response;
		this.message =
			`${body?.status_code} - ${body?.status_message}` ||
			`${response.status} - ${response.statusText} `;
	}
}
