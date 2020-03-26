import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {AuthService} from '../../services';
import firebase from 'react-native-firebase';

class LoadingScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this._authListener = AuthService.authStateListener(
			this._handleState.bind(this),
		);
	}

	componentWillUnmount() {
		this._authListener();
	}

	_handleState(data) {
		if (data) {
			this.props.navigation.navigate('App');
		} else {
			this.props.navigation.navigate('Auth');
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>This is the LoadingScreen.</Text>
			</View>
		);
	}
}

export default LoadingScreen;
