import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AccessKeyProvider from './access-key';
import AuthProvider from './auth';
import ModalProvider from './modal';
import ProgressBarProvider from './progress-bar';
import SidemenuOpenProvider from './sidemenu-open';
import SubmissionStateProvider from './submission-state';

const queryClient = new QueryClient();

/** Place your React's context providers inside this component. They will automatically
 * be visible in your whole application. */
const Providers: React.FunctionComponent<React.PropsWithChildren<{}>> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<ProgressBarProvider>
					<SidemenuOpenProvider>
						<SubmissionStateProvider>
							<AccessKeyProvider>
								<ModalProvider>{children}</ModalProvider>
							</AccessKeyProvider>
						</SubmissionStateProvider>
					</SidemenuOpenProvider>
				</ProgressBarProvider>
			</AuthProvider>
		</QueryClientProvider>
	);
};

export default Providers;
