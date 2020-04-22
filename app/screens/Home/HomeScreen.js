import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import AuthService from "../../services/AuthService";
import styles from './styles';
import AppHeader from '../Components/AppHeader';
import AudioPlayerScreen from '../Components/AudioPlayerScreen';
import LoadingContext from "../../LoadingContext";

export default function HomeScreen({ route, navigation }) {
	const [tales, setTales] = useState({});
	const context = useContext(LoadingContext);

	useEffect(() => {
		context.startLoading();
		AuthService.getTales().then(snapshot => {
			snapshot && setTales(snapshot.val());
			context.stopLoading();
		}).catch(err => {
			console.log('Set error message -> ', err && err.message);
			context.stopLoading();
		});
	}, []);

	return (
		<>
			<AppHeader
				route={route}
				navigation={navigation}
			/>
			<View style={styles.container}>
				<AudioPlayerScreen source={tales.url} />
			</View>
		</>
	);
}

HomeScreen.defaultProps = {
	route: {},
	navigation: {}
}

HomeScreen.propTypes = {
	route: PropTypes.objectOf(Object),
	navigation: PropTypes.objectOf(Object)
}
