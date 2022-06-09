import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../../contexts/auth';

export function useRequireAuth() {
	const router = useRouter();
	const { auth } = useAuth();

	useEffect(() => {
		if (auth) return;

		const oldPathName = router.pathname;
		router.push(`/login?old-path-name=${oldPathName}`);
	}, [auth]);
}
