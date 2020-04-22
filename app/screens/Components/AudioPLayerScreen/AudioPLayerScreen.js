import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import TrackPlayer from "react-native-track-player";
import {
	Image,
	StyleSheet,
	Text,
	View
} from "react-native";
import AuthService from '../../../services/AuthService';
import ProgressBar from "./ProgressBar";
import PlayerButton from "./PlayerButton";
import LoadingContext from '../../../LoadingContext';

const styles = StyleSheet.create({
	card: {
		width: "80%",
		elevation: 1,
		borderRadius: 4,
		shadowRadius: 2,
		shadowOpacity: 0.1,
		alignItems: "center",
		shadowColor: "black",
		backgroundColor: "white",
		shadowOffset: { width: 0, height: 1 }
	},
	cover: {
		width: 140,
		height: 140,
		marginTop: 20,
		backgroundColor: "grey"
	},
	title: {
		marginTop: 10
	},
	artist: {
		fontWeight: "bold"
	},
	controls: {
		marginVertical: 20,
		flexDirection: "row"
	},
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	description: {
		width: "80%",
		marginTop: 20,
		textAlign: "center"
	},
	player: {
		marginTop: 40
	},
	state: {
		marginTop: 20
	}
});

function getStateName(state) {
	switch (state) {
		case TrackPlayer.STATE_NONE:
			return "None";
		case TrackPlayer.STATE_PLAYING:
			return "Playing";
		case TrackPlayer.STATE_PAUSED:
			return "Paused";
		case TrackPlayer.STATE_STOPPED:
			return "Stopped";
		case TrackPlayer.STATE_BUFFERING:
			return "Buffering";
		default:
			return "Loading";
	}
}

async function skipToNext() {
	try {
		await TrackPlayer.skipToNext();
	} catch (_) {
		console.log("Skip to next failed.")
	}
}

async function skipToPrevious() {
	try {
		await TrackPlayer.skipToPrevious();
	} catch (_) {
		console.log("Skip to previous failed.");

	}
}

export default function AudioPlayerScreen({ track }) {
	const playbackState = TrackPlayer.usePlaybackState();
	const [tales, setTales] = useState({});
	const context = useContext(LoadingContext);

	useEffect(() => {
		context.startLoading();
		AuthService.getTales().then(snapshot => {
			console.log('Tales - ', snapshot.val());
			snapshot && setTales(snapshot.val());
			context.stopLoading();
		}).catch(err => {
			console.log('Set error message -> ', err && err.message);
			context.stopLoading();
		});
	}, []);

	useEffect(() => {
		console.log(TrackPlayer);

		TrackPlayer.setupPlayer();
		TrackPlayer.updateOptions({
			stopWithApp: true,
			capabilities: [
				TrackPlayer.CAPABILITY_PLAY,
				TrackPlayer.CAPABILITY_PAUSE,
				TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
				TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
				TrackPlayer.CAPABILITY_STOP
			],
			compactCapabilities: [
				TrackPlayer.CAPABILITY_PLAY,
				TrackPlayer.CAPABILITY_PAUSE
			]
		});

		// Destroy when leaving the page
		// TODO check if this is required
		return TrackPlayer.destroy();
	}, []);

	async function togglePlayback() {
		const currentTrack = await TrackPlayer.getCurrentTrack();
		if (currentTrack == null) {
			await TrackPlayer.reset();
			// TODO it will be used later when we load a whole playlist
			// await TrackPlayer.add(playlistData);
			await TrackPlayer.add({
				id: tales.id,
				url: tales.url,
				title: tales.title,
				artist: tales.artist,
				artwork: tales.artwork
			});
			await TrackPlayer.play();
		} else if (playbackState === TrackPlayer.STATE_PAUSED) {
			await TrackPlayer.play();
		} else {
			await TrackPlayer.pause();
		}
	}

	TrackPlayer.useTrackPlayerEvents(["playback-track-changed"], async event => {
		if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
			// const track = await TrackPlayer.getTrack(event.nextTrack);
		}
	});

	let middleButtonText = "Play";

	if (
		playbackState === TrackPlayer.STATE_PLAYING ||
		playbackState === TrackPlayer.STATE_BUFFERING
	) {
		middleButtonText = "Pause";
	}

	return (
		<View style={styles.container}>
			<Text style={styles.description}>
				We'll be inserting a playlist into the library loaded from
				`playlist.json`. We'll also be using the `ProgressComponent` which
				allows us to track playback time.
		</Text>
			<View style={[styles.card]}>
				<Image style={styles.cover} source={{ uri: "https://cf.geekdo-images.com/opengraph/img/xEt5R-cc1TkASC-nCDR5HgtC4rk=/fit-in/1200x630/pic3714280.jpg" }} />
				<ProgressBar />
				<Text style={styles.title}>{track.title}</Text>
				<Text style={styles.artist}>{track.artist}</Text>
				<View style={styles.controls}>
					<PlayerButton title={"<<"} onPress={skipToNext} />
					<PlayerButton title={middleButtonText} onPress={togglePlayback} />
					<PlayerButton title={">>"} onPress={skipToPrevious} />
				</View>
			</View>
			<Text style={styles.state}>{getStateName(playbackState)}</Text>
		</View>

	);
}

AudioPlayerScreen.navigationOptions = {
	title: "Playlist Example"
};

AudioPlayerScreen.propTypes = {
	track: PropTypes.objectOf(Object),
};

AudioPlayerScreen.defaultProps = {
	track: {
		id: 0,
		title: '',
		artist: '',
		artwork: '',
		url: ''
	}
};
