import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import i18n from '../i18n';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import {AppVariables} from '../AppStyles';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
	return (
		<Drawer.Navigator
			drawerStyle={{
				backgroundColor: AppVariables.appGreyLight,
			}}
			drawerContentOptions={{
				activeBackgroundColor: AppVariables.appGrey,
				activeTintColor: AppVariables.appWhite,
				labelStyle: {
					fontSize: AppVariables.appButtonFontSize,
					borderRadius: AppVariables.appButtonBorderRadius,
				},
			}}>
			<Drawer.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: i18n.t('navigation.home'),
				}}
			/>
			<Drawer.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					title: i18n.t('navigation.settings'),
				}}
			/>
		</Drawer.Navigator>
	);
}
