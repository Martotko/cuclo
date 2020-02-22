import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import AppStyles from '../../AppStyles';
import AppInput from '../Components/AppInput';
import AppButton from '../Components/AppButton';
import i18n from '../../i18n';
import AuthContext from '../../AuthContext';

const styles = StyleSheet.create({});

export default class SignUpScreen extends Component {
	constructor(props) {
		super(props);

		this.refUsername = React.createRef();
		this.refPassword = React.createRef();
	}

	/**
	 * Submit
	 * @private
	 */
	_submit() {
		const sUsername = this.refUsername.current.state.value;
		const sPassword = this.refPassword.current.state.value;

		if (sUsername && sPassword) {
			this.context.signUp(sUsername, sPassword);
		}
	}

	render() {
		const {mainContainer} = styles;
		const {container} = AppStyles;

		return (
			<View style={[container, mainContainer]}>
				<AppInput
					ref={this.refUsername}
					sPlaceholder={i18n.t('placeholders.username')}
				/>
				<AppInput
					ref={this.refPassword}
					sPlaceholder={i18n.t('placeholders.password')}
				/>
				<AppButton
					sText={i18n.t('buttons.signUp')}
					fnPress={this._submit.bind(this)}
				/>
			</View>
		);
	}
}

SignUpScreen.contextType = AuthContext;
