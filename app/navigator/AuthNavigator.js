import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import i18n from '../i18n';
import AuthHomeScreen from '../screens/AuthHome';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import PasswordResetScreen from '../screens/PasswordReset';

const Stack = createStackNavigator();

export default function AuthNavigator() {
	return (
		<Stack.Navigator initialRouteName="AuthHome">
			<Stack.Screen
				name="AuthHome"
				component={AuthHomeScreen}
				options={{
					title: i18n.t('navigation.authHome'),
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="SignIn"
				component={SignInScreen}
				options={{
					title: i18n.t('navigation.signIn'),
				}}
			/>
			<Stack.Screen
				name="SignUp"
				component={SignUpScreen}
				options={{
					title: i18n.t('navigation.singUp'),
				}}
			/>
			<Stack.Screen
				name="PasswordReset"
				component={PasswordResetScreen}
				options={{
					title: i18n.t('navigation.passwordReset'),
				}}
			/>
		</Stack.Navigator>
	);
}
