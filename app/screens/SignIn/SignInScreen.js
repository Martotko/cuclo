import React, { useContext, useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import AppButton from '../Components/AppButton';
import i18n from '../../i18n';
import AppStyles, { AppVariables } from '../../AppStyles';
import AppInput from '../Components/AppInput';
import { AuthService } from '../../services';
import LoadingContext from "../../LoadingContext";
import AppError from "../Components/AppError";


const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: 'white',
	},
	error: {
		width: '100%',
		fontSize: 22,
		color: AppVariables.appErrorColor
	}
});

export default function SignInScreen() {
	const refEmail = useRef();
	const refPassword = useRef();

	const [error, setError] = useState({ bHasError: false, sErrorMessage: '' });

	const context = useContext(LoadingContext);
	/**
	 * Submit
	 * @private
	 */
	function submit() {
		const sEmail = refEmail.current.props.value;
		const sPassword = refPassword.current.props.value;

		if (!sEmail || !sPassword) {
			return;
		}

		context.startLoading();
		AuthService.signIn("Test@test.com", "test1234").then(data => {
			setError({ bHasError: false, sErrorMessage: '' });
			context.stopLoading();
		}).catch(error => {
			setError({ bHasError: true, sErrorMessage: error && error.message })
			context.stopLoading();
		})
	}

	const { mainContainer } = styles;
	const { container } = AppStyles;
	return (
		<View style={[container, mainContainer]}>
			<AppInput ref={refEmail} sPlaceholder={i18n.t('placeholders.email')} />
			<AppInput ref={refPassword} sPlaceholder={i18n.t('placeholders.password')} />
			<AppButton sText={i18n.t('buttons.signIn')} fnPress={submit} />
			{error.bHasError ? <AppError sMessage={error.sErrorMessage} /> : null}
		</View>
	);
}

SignInScreen.propTypes = {
};

SignInScreen.defaultProps = {
	navigation: {},
};
