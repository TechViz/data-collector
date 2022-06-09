// Framework
import React from 'react';
import Head from 'next/head';

// Misc
import FilledThemeProvider from '../theme';
import Providers from '../contexts';
import AppContainer from '../containers/_app';
import Services from '../services';

import { ToastContainer } from 'react-toastify';
import { deployedURLHome } from '../constants/deployed-url';
import { supportedLanguages } from '../constants/supported-languages';

type MyAppProps = React.PropsWithoutRef<{
	// The following rule is being ignored because this type is not important and
	// Is very hard to describe
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Component: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	pageProps: any;
}>;

type MyAppComponent = React.FunctionComponent<MyAppProps>;

const MyApp: MyAppComponent = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				{/* Favicon related stuff */}
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
				<meta name="theme-color" content="#ffffff" />

				<meta name="description" content="Software Tech Viz" />

				{/* These meta tags are related to OpenGraph, which allows for better webpage cards. */}
				{/* TODO - put real content here */}
				<meta property="og:title" content="Tech Viz" />
				<meta property="og:site_name" content="Tech Viz" />
				<meta property="og:description" content="Software de Analytics da Tech Viz" />
				<meta property="og:locale" content={supportedLanguages[0].replace(/-/g, '_')} />
				{supportedLanguages.slice(1).map(language => (
					<meta property="og:locale:alternate" content={language.replace(/-/g, '_')} />
				))}
				{/* <meta property="og:image" content={`${ImageURLs.logoPng}`} /> */}
				<meta property="og:image:width" content="1332" />
				<meta property="og:image:height" content="1064" />
				<meta property="og:url" content={deployedURLHome} />
			</Head>

			<FilledThemeProvider>
				<Providers>
					<AppContainer>
						<Services />
						<ToastContainer hideProgressBar />
						<Component {...pageProps} />
					</AppContainer>
				</Providers>
			</FilledThemeProvider>
		</>
	);
};

export default MyApp;
