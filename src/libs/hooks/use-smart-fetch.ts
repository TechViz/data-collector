import { useAuth } from '../../contexts/auth';
import { ServerResponse } from '../../models/server-response';

function useSmartFetch<ServerResponseData, Body = undefined>() {
	const { updateToken, auth } = useAuth();

	async function smartFetch(path: string, method: 'GET' | 'DELETE' | 'PUT' | 'POST', body: Body) {
		const hasBody = Boolean(body);
		const headers: Record<string, string> = {};

		if (hasBody) {
			headers['Content-Type'] = 'application/json';
		}

		if (auth?.token) {
			headers['Authorization'] = auth.token;
		}

		const response = await fetch(path, { method, headers, body: JSON.stringify(body) });

		// The token should not be updated if no auth is present.
		if (auth && response.headers.has('x-amzn-remapped-authorization')) {
			updateToken(response.headers.get('x-amzn-remapped-authorization')!);
		}

		let data: ServerResponse<ServerResponseData>;
		try {
			data = await response.json();
		} catch (e) {
			throw new Error('Failed to parse server response as JSON');
		}

		if (!response.ok) {
			throw new Error(data.message);
		}

		return data.payload;
	}

	return smartFetch;
}

export function useSmartPost<ServerResponseData, Body extends object>() {
	const smartFetch = useSmartFetch<ServerResponseData, Body>();

	function smartPost(path: string, body: Body) {
		return smartFetch(path, 'POST', body);
	}

	return smartPost;
}

export function useSmartGet<ServerResponseData>() {
	const smartFetch = useSmartFetch<ServerResponseData, undefined>();

	function smartPost(path: string) {
		return smartFetch(path, 'GET', undefined);
	}

	return smartPost;
}
