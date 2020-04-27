import React, { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: '5%',
		height: 150,
	},
	imageContainer: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'flex-end'
	},
	title: {
		fontSize: 22
	}
});

export default function SongCover({ oDetails, fnOnPress }) {
	const { container, imageContainer, title } = styles;
	const [songDetails, setSongDetails] = useState({});
	const [background, setBackground] = useState({ uri: "https://reactjs.org/logo-og.png" });

	useEffect(() => {
		console.log('here', oDetails);

		setBackground({ uri: oDetails.artwork });
		setSongDetails(oDetails);
	}, [oDetails]);

	return (
		<TouchableOpacity onPress={() => fnOnPress(songDetails.id)} style={container}>
			<ImageBackground source={background} style={imageContainer}>
				<Text style={title}>{songDetails.title}</Text>
			</ImageBackground>
		</TouchableOpacity>
	);
}

SongCover.propTypes = {
	oDetails: PropTypes.objectOf(Object),
	fnOnPress: PropTypes.func
};

SongCover.defaultProps = {
	oDetails: {},
	fnOnPress: () => { }
};


