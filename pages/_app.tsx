import '../styles/globals.css';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import createEmotionCache from '../utils/createEmotionCache';
import { MuiThemeProvider } from '@material-ui/core';
import theme from '../utils/theme';
import { CacheProvider } from '@emotion/react';
import { useEffect } from 'react';

const clientSideEmotionCache = createEmotionCache();
export default function MyApp(props: any) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
			<MuiThemeProvider theme={theme}>
				<Component {...pageProps} />
			</MuiThemeProvider>
		</CacheProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
