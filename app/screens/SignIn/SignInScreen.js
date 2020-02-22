import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import AuthContext from '../../AuthContext';
import AppButton from '../Components/AppButton';
import i18n from '../../i18n';
import AppStyles from '../../AppStyles';
import AppInput from '../Components/AppInput';

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: 'white',
	},
});

export default class SignInScreen extends Component {
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
			this.context.signIn(sUsername, sPassword);
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
					sText={i18n.t('buttons.signIn')}
					fnPress={this._submit.bind(this)}
				/>
			</View>
		);
	}
}

SignInScreen.contextType = AuthContext;
