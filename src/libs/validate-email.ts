export function validateEmail(email: string) {
	/*
	 * Note: this regex was found in this stackoverflow post:
	 * https://stackoverflow.com/a/46181/10006941
	 */

	// eslint-disable-next-line max-len
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
