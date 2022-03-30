import { makeStyles, Theme } from '@material-ui/core';
import { DarkRed } from '../utils';

type StyleProps = {
	variant: 'contained' | 'outlined' | 'text';
	minWidth?: number;
	loading?: boolean;
};

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
	root: {
		textTransform: 'initial',
		minWidth: ({ minWidth }: StyleProps) => (minWidth ? minWidth : 176),
		padding: '10px 62px',
		boxShadow: 'none',
		transition: 'none',
		opacity: ({ variant, loading }: StyleProps) => (variant === 'outlined' ? 1 : loading ? 0.8 : 1),

		'&:hover': {
			transition: 'all 0.3s',
		},
	},
	circularLoading: {
		color: DarkRed,
	},
}));
