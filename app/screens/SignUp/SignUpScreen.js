import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import AppStyles from '../../AppStyles';
import AppInput from '../Components/AppInput';
import AppButton from '../Components/AppButton';
import i18n from '../../i18n';
import { AuthService } from '../../services';

const styles = StyleSheet.create({});

export default function SignUpScreen() {
	const refEmail = React.createRef();
	const refPassword = React.createRef();

	/**
	 * Submit
	 * @private
	 */
	function submit() {
		if (!refEmail || !refPassword) {
			return;
		}

		const sEmail = refEmail.current.state.value;
		const sPassword = refPassword.current.state.value;

		if (sEmail && sPassword) {
			AuthService.signUp(sEmail, sPassword);
		}
	}

	const { mainContainer } = styles;
	const { container } = AppStyles;

	return (
		<View style={[container, mainContainer]}>
			<AppInput
				ref={refEmail}
				sPlaceholder={i18n.t('placeholders.email')}
			/>
			<AppInput
				ref={refPassword}
				sPlaceholder={i18n.t('placeholders.password')}
			/>
			<AppButton
				sText={i18n.t('buttons.signUp')}
				fnPress={submit}
			/>
		</View>
	);
}


SignUpScreen.propTypes = {
	// navigation: PropTypes.objectOf(Object),
};

SignUpScreen.defaultProps = {
	navigation: {},
};
