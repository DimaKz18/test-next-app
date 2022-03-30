import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../utils/theme';
import { ServerStyleSheets } from '@material-ui/styles';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='manifest' href='/manifest.json' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap' rel='stylesheet' />
					<meta name='theme-color' content={theme.palette.primary.main} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
	};
};
