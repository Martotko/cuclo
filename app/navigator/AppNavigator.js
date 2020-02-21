

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import i18n from '../i18n';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
	return (
		<Tab.Navigator initialRouteName="Home">
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: i18n.t('navigation.home')
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					title: i18n.t('navigation.settings')
				}}
			/>
		</Tab.Navigator>
	);
}