import React from 'react';
import { useValidateAccessKey } from '../api/user/validate-access-key';
import { useLocalStorage } from '../libs/hooks/use-local-storage';

type AccessKeyContext = {
	accessKey: string | null;
	isSuccess: boolean;
	isLoading: boolean;
	error: Error | null;
	setAccessKey: (newAccessKey: string | null) => void;
};

const context = React.createContext<AccessKeyContext>(null as unknown as AccessKeyContext);

const AccessKeyProvider = ({ ...props }) => {
	const [accessKey, setAccessKey] = useLocalStorage<string>('access-key');
	const { mutate: validateAccessKey, isSuccess, isLoading, error } = useValidateAccessKey();

	React.useEffect(() => {
		if (!accessKey) return;
		validateAccessKey({ accessKey });
	}, [accessKey]);

	return (
		<context.Provider
			value={React.useMemo(
				() => ({
					accessKey: isSuccess ? accessKey : null,
					isSuccess,
					isLoading,
					error,
					setAccessKey,
				}),
				[accessKey, accessKey, isSuccess, isLoading, error],
			)}
			{...props}
		/>
	);
};

const useAccessKey = () => {
	return React.useContext(context);
};

export { useAccessKey };
export default AccessKeyProvider;
