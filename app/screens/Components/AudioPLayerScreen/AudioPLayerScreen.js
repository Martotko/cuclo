import React, { useState, useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import TrackPlayer from "react-native-track-player";
import {
	Image,
	StyleSheet,
	Text,
	View
} from "react-native";
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

const oInitialTrackObject = {
	id: 0,
	title: '',
	artist: '',
	artwork: '',
	url: 'a'
}

export default function AudioPlayerScreen({ aPlaylist }) {
	let sMiddleButtonText;
	const playbackState = TrackPlayer.usePlaybackState();
	const [oCurrentTrack, setCurrentTrack] = useState(oInitialTrackObject);
	const context = useContext(LoadingContext);

	useEffect(() => {
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

	useEffect(() => {
		async function setPlaylist() {
			await TrackPlayer.reset();
			await TrackPlayer.add(aPlaylist);
		}
		setPlaylist(aPlaylist);
		setCurrentTrack(aPlaylist[0]);
	}, [aPlaylist])

	async function togglePlayback() {
		const currentTrack = await TrackPlayer.getCurrentTrack();
		if (currentTrack == null) {
			await TrackPlayer.reset();
			// await TrackPlayer.add(aPlaylist);
			await TrackPlayer.play();
		} else if (playbackState === TrackPlayer.STATE_PAUSED) {
			await TrackPlayer.play();
		} else {
			await TrackPlayer.pause();
		}
	}

	TrackPlayer.useTrackPlayerEvents(["playback-track-changed"], async event => {
		if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
			const oCurrent = await TrackPlayer.getTrack(event.nextTrack);
			setCurrentTrack(oCurrent);
		}
	});
	TrackPlayer.useTrackPlayerEvents(["playback-state"], async event => {
		if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
			const oCurrent = await TrackPlayer.getTrack(event.nextTrack);
			setCurrentTrack(oCurrent);
		}
	});

	if (playbackState === TrackPlayer.STATE_PLAYING ||
		playbackState === TrackPlayer.STATE_BUFFERING) {
		sMiddleButtonText = "Pause";
	} else {
		sMiddleButtonText = "Play";
	}

	return (
		<View style={styles.container}>
			<Text style={styles.description}>
				We'll be inserting a playlist into the library loaded from
				`playlist.json`. We'll also be using the `ProgressComponent` which
				allows us to track playback time.
		</Text>
			<View style={[styles.card]}>
				{oCurrentTrack && <Image style={styles.cover} source={{ uri: oCurrentTrack.artwork }} />}
				<ProgressBar />
				{oCurrentTrack && <Text style={styles.title}>{oCurrentTrack.title}</Text>}
				{oCurrentTrack && <Text style={styles.artist}>{oCurrentTrack.artist}</Text>}
				<View style={styles.controls}>
					<PlayerButton title={"<<"} onPress={skipToPrevious} />
					<PlayerButton title={sMiddleButtonText} onPress={togglePlayback} />
					<PlayerButton title={">>"} onPress={skipToNext} />
				</View>
			</View>
			<Text style={styles.state}>{getStateName(playbackState)}</Text>
			<PlayerButton title="Test button" onPress={async () => { console.log(await TrackPlayer.getPosition()) }} />
		</View>

	);
}

AudioPlayerScreen.navigationOptions = {
	title: "Playlist Example"
};

AudioPlayerScreen.propTypes = {
	aPlaylist: PropTypes.arrayOf(Object)
};

AudioPlayerScreen.defaultProps = {
	aPlaylist: [oInitialTrackObject]
};