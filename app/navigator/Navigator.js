import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import LoadingScreen from '../screens/Loading';

const Stack = createStackNavigator();

function Navigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					initialRouteName: 'Initial',
				}}>
				<Stack.Screen name="Initial" component={LoadingScreen} />
				<Stack.Screen name="Auth" component={AuthNavigator} />
				<Stack.Screen name="App" component={AppNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Navigator;
