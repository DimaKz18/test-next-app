import { makeStyles } from '@material-ui/core';
import { BackgroundDarkGrey, BackgroundYellow, Black, DarkRed, InputTextWhite, PlaceholderGrey } from '../utils';

export const useStyles = makeStyles((theme) => ({
	layoutBackground: {
		background: Black,
	},
	logoContainer: {
		paddingTop: 228,
		[theme.breakpoints.up('md')]: {
			paddingTop: 120,
		},
		[theme.breakpoints.up('lg')]: {
			paddingTop: 40,
		},
	},
	formContainer: {
		marginTop: 140,
		[theme.breakpoints.up('sm')]: {
			marginTop: 50,
		},
	},
	formFieldContainer: {
		minHeight: 86,
		textAlign: 'left',
	},
	formField: {
		color: InputTextWhite,
		background: BackgroundDarkGrey,
	},
	formFieldPlaceholder: {
		color: PlaceholderGrey,
	},
	formButtonContainer: {
		marginTop: 26,
		paddingBottom: 20,
		maxWidth: 290,
	},
	firstFormButton: {
		background: BackgroundYellow,
		color: Black,
		fontWeight: 700,
		fontSize: 18,

		'&:hover': {
			background: BackgroundYellow,
		},
	},
	secondFormButton: {
		marginTop: 12,
		background: BackgroundDarkGrey,
		color: InputTextWhite,
		fontWeight: 400,
		fontSize: 18,

		'&:hover': {
			background: BackgroundDarkGrey,
		},
	},
	container: {
		height: '100vh',
		background: 'pink',
	},
	title: {
		color: DarkRed,
	},
}));
