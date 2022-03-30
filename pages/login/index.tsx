import { Grid } from '@material-ui/core';
import { NextPage } from 'next';
import React from 'react';
import { useStyles } from '../../styles/styles';
import Button from '../../Button';
import dynamic from 'next/dynamic';
import ClientOnly from '../../components';

const Login: NextPage = () => {
	const classes = useStyles();

	return (
		<ClientOnly>
			<div className={classes.container}>
				<h2 className={classes.title}>Login page</h2>
				<Grid item container direction='column' alignContent='center' className={classes.formButtonContainer}>
					<Button variant='contained' className={classes.firstFormButton} submitType>
						Login
					</Button>

					<Button variant='contained' id='login_page_sign_up_button' className={classes.secondFormButton}>
						Register
					</Button>
				</Grid>
			</div>
		</ClientOnly>
	);
};

export default Login;
