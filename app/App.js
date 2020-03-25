import {enableScreens} from 'react-native-screens';
import React, {Component} from 'react';
import Navigator from './navigator/Navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
enableScreens();

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<SafeAreaProvider>
				<Navigator />
			</SafeAreaProvider>
		);
	}
}
