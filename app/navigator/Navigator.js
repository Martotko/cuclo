import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import LoadingScreen from '../screens/Loading';

const Stack = createStackNavigator();

function Navigator(props) {
	const { userToken, isLoading } = props;

	if (isLoading) {
		// We haven't finished checking for the token yet
		return <LoadingScreen />
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}>

				{userToken == null ?
					(
						// No token found, user isn't signed in
						<Stack.Screen
							name="Auth"
							component={AuthNavigator}
						/>
					) : (
						// User is signed in
						<Stack.Screen
							name="App"
							component={AppNavigator}
						/>
					)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Navigator;