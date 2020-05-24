import React, { useState, useEffect, useContext } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import AuthService from "../../services/AuthService";
import AppHeader from '../Components/AppHeader';
import LoadingContext from "../../LoadingContext";
import SongCover from '../Components/SongCover';
import mockData from './mockData';

export default function HomeScreen({ route, navigation }) {
	const [aTalesPlaylist, setTalesPlaylist] = useState([]);
	const context = useContext(LoadingContext);

	useEffect(() => {
		setTalesPlaylist(mockData);

		// context.startLoading();
		// TODO set the list property refreshing as a true while waiting
		// AuthService.getTales().then(snapshot => {
		// 	snapshot && setTales(snapshot.val());
		// 	context.stopLoading();
		// }).catch(err => {
		// 	context.stopLoading();
		// });
	}, [route, navigation]);

	return (
		<>
			<AppHeader
				route={route}
				navigation={navigation}
			/>
			<FlatList
				data={aTalesPlaylist}
				numColumns={2}
				horizontal={false}
				initialNumToRender={6}
				renderItem={({ item }) => (
					<SongCover
						oDetails={item}
						fnOnPress={() => navigation.navigate("Player", item)}
					/>
				)}
				keyExtractor={item => item.id}
			/>
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
