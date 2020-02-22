import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';
import AuthContext from '../../AuthContext';
import PropTypes from 'prop-types';
import AppHeader from '../Components/AppHeader';

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<AppHeader navigation={this.props.navigation} />
				<View style={styles.container}>
					<Text>This is the HomeScreen.</Text>
					<Button
						title="Go to Details"
						onPress={() => this.context.signOut()}
					/>
				</View>
			</>
		);
	}
}

HomeScreen.contextType = AuthContext;
