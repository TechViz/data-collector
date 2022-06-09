import { useCallback, useState } from 'react';
import { sleep } from '../sleep';

export function useFakeRequest() {
	const [isLoading, setIsLoading] = useState(false);

	const request = useCallback(async () => {
		setIsLoading(true);
		await sleep(2000);
		setIsLoading(true);
	}, []);

	return { makeRequest: request as (...args: any[]) => Promise<void>, isLoading };
}
