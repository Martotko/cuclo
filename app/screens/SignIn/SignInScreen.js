import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import AuthContext from '../../AuthContext';
import AppButton from '../Components/AppButton';
import i18n from '../../i18n';
import AppStyles from '../../AppStyles';
import AppInput from '../Components/AppInput';
import firebase from 'react-native-firebase';

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

		console.log(
			firebase
				.auth()
				.signInAnonymously()
				.then(a => console.log(a)),
		);
	}

	/**
	 * Submit
	 * @private
	 */
	_submit() {
		const sUsername = this.refUsername.current.state.value;
		const sPassword = this.refPassword.current.state.value;

		if (sUsername && sPassword) {
			// sUsername, sPassword);
			firebase
				.auth()
				.signInWithEmailAndPassword(sUsername, sPassword)
				.then(data =>
					this.context.signIn(data.user._user.refreshToken),
				);
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
