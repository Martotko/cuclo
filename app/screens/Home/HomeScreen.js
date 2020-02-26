import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';
import AuthContext from '../../AuthContext';
import PropTypes from 'prop-types';
import AppHeader from '../Components/AppHeader';
import AudioPlayer from '../Components/AudioPLayer';

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<AppHeader
					route={this.props.route}
					navigation={this.props.navigation}
				/>
				<View style={styles.container}>
					<AudioPlayer />
				</View>
			</>
		);
	}
}

HomeScreen.contextType = AuthContext;
