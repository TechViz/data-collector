import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useAccessKey } from '../contexts/access-key';

const AccessKeyCollector: FC<{}> = ({}) => {
	const { query } = useRouter();
	const { setAccessKey } = useAccessKey();

	const queryAccessKey = query.access_key as string | undefined;

	React.useEffect(() => {
		if (!queryAccessKey) return;

		setAccessKey(queryAccessKey);
	}, [queryAccessKey]);

	return null;
};

export default AccessKeyCollector;
