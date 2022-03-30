import React from 'react';
import { Button as MuiButton, ButtonProps } from '@material-ui/core';
import { useStyles } from './styles';
import cn from 'classnames';
import ClientOnly from '../components';
import clsx from 'clsx';

export type Props = ButtonProps & {
	variant: 'contained' | 'outlined' | 'text';
	onClick?: () => void;
	minWidth?: number;
	submitType?: boolean;
	loading?: boolean;
};

const Button = (props: Props) => {
	const { className = '', variant, minWidth, children, onClick, submitType, id, loading, ...others } = props;
	const classes = useStyles({ variant, minWidth, loading });

	// const rootClass = cn({[classes.root]: true, [className]: !!className});
	// const rootClass = cn({ [classes.root]: classes.root, [className]: className });

	const rootClass = clsx(classes.root, className);

	console.log({
		className,
		rootClass,
	});

	return (
			<MuiButton
				className={className}
				onClick={onClick}
				variant={variant}
				type={submitType ? 'submit' : 'button'}
				id={`button-${id}`}
				{...others}
			>
				{children}
			</MuiButton>
	);
};

export default Button;
