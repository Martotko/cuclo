import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import AppHeader from '../Components/AppHeader';
import AudioPlayer from '../Components/AudioPLayer';
import firebase from 'react-native-firebase';

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			url: '',
		};
	}

	componentDidMount() {
		let storage = firebase.storage();
		storage
			.ref('background.wav')
			.getDownloadURL()
			.then(url => {
				this.setState({url: url});
			});

		console.log(storage.ref('background.wav'));
	}

	render() {
		return (
			<>
				<AppHeader
					route={this.props.route}
					navigation={this.props.navigation}
				/>
				<View style={styles.container}>
					<AudioPlayer source={this.state.url} />
				</View>
			</>
		);
	}
}
