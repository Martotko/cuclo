import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import AppButton from '../Components/AppButton';
import i18n from '../../i18n';
import AppStyles from '../../AppStyles';
import AppInput from '../Components/AppInput';
import {AuthService} from '../../services';

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: 'white',
	},
});

export default class SignInScreen extends Component {
	constructor(props) {
		super(props);

		this.refEmail = React.createRef();
		this.refPassword = React.createRef();
	}

	/**
	 * Submit
	 * @private
	 */
	_submit() {
		const sEmail = this.refEmail.current.state.value;
		const sPassword = this.refPassword.current.state.value;

		if (sEmail && sPassword) {
			AuthService.signIn(sEmail, sPassword);
		}
	}

	render() {
		const {mainContainer} = styles;
		const {container} = AppStyles;

		return (
			<View style={[container, mainContainer]}>
				<AppInput
					ref={this.refEmail}
					sPlaceholder={i18n.t('placeholders.email')}
				/>
				<AppInput
					ref={this.refPassword}
					sPlaceholder={i18n.t('placeholders.password')}
				/>
				<AppButton
					sText={i18n.t('buttons.signIn')}
					fnPress={this._submit.bind(this)}
				/>
			</View>
		);
	}
}
