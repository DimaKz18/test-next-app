import { createTheme } from '@material-ui/core';

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 350,
			md: 700, // tablet
			lg: 1025, // desktop
			xl: 1921, // large desktop
		},
	},
	typography: {
		fontFamily: 'Montserrat, sans-serif',
		fontSize: 16,
	},
});

theme.typography.h1 = {
	fontStyle: 'normal',
	fontWeight: 500,
	fontSize: '1.375rem', // 22
	lineHeight: 1.5,
};

theme.typography.h2 = {
	fontStyle: 'normal',
	fontWeight: 500,
	fontSize: '1.25rem', // 20
	lineHeight: 1.5,
};

theme.typography.h3 = {
	fontStyle: 'normal',
	fontWeight: 500,
	fontSize: '1.125rem', // 18
	lineHeight: 1.5,
};

theme.typography.body1 = {
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: '1rem', // 16
	lineHeight: 1.5,
};

theme.typography.caption = {
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: '0.875rem', // 14
	lineHeight: 1.5,
};

export default theme;
