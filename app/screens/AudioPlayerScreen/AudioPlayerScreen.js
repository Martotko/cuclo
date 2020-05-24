import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import TrackPlayer from "react-native-track-player";
import {
	Image,
	Text,
	View
} from "react-native";
import ProgressBar from "./ProgressBar";
import PlayerButton from "./PlayerButton";
import LoadingContext from '../../LoadingContext';
import AppHeader from '../Components/AppHeader';
import styles from './styles';

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

export default function AudioPlayerScreen({ aPlaylist, route, navigation }) {
	let sMiddleButtonIcon;
	const playbackState = TrackPlayer.usePlaybackState();
	const [oCurrentTrack, setCurrentTrack] = useState(oInitialTrackObject);
	const context = useContext(LoadingContext);

	/**
	 * Initialize player
	 */
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

		return () => {
			TrackPlayer.destroy();
		}
	}, []);


	/**
	 * Gets track details from the navigation and loads it to the player
	 */
	useEffect(() => {
		const oTrack = route.params;
		setCurrentTrack(route.params);
		async function setTrack() {
			// clear the player
			await TrackPlayer.reset();
			// set the song
			await TrackPlayer.add(oTrack);
		};
		setTrack();
	}, [route.params]);

	async function togglePlayback() {
		const currentTrack = await TrackPlayer.getCurrentTrack();
		if (currentTrack == null) {
			await TrackPlayer.reset();
			// await TrackPlayer.add(aPlaylist);
			await TrackPlayer.play();
		} else if (playbackState === TrackPlayer.STATE_PAUSED || playbackState === TrackPlayer.STATE_READY) {
			await TrackPlayer.play();
		} else {
			await TrackPlayer.pause();
		}
	}

	// TrackPlayer.useTrackPlayerEvents(["playback-track-changed"], async event => {
	// 	if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
	// 		const oCurrent = await TrackPlayer.getTrack(event.nextTrack);
	// 		setCurrentTrack(oCurrent);
	// 	}
	// });

	// TrackPlayer.useTrackPlayerEvents(["playback-state"], async event => {
	// 	if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
	// 		const oCurrent = await TrackPlayer.getTrack(event.nextTrack);
	// 		setCurrentTrack(oCurrent);
	// 	}
	// });
	if (playbackState === TrackPlayer.STATE_PLAYING ||
		playbackState === TrackPlayer.STATE_BUFFERING) {
		sMiddleButtonIcon = "ios-pause";
	} else {
		sMiddleButtonIcon = "ios-play";
	}
	const { playerContainer, playerCover, playerTitle, playerArtist } = styles;
	return (
		<>
			<AppHeader
				route={route}
				navigation={navigation}
			/>
			{oCurrentTrack ?
				<View style={playerContainer}>
					<Image style={playerCover} source={{ uri: oCurrentTrack.artwork }} />
					<Text style={playerTitle}>{oCurrentTrack.title}</Text>
					<Text style={playerArtist}>{oCurrentTrack.artist}</Text>
					<ProgressBar />
					<View style={styles.controls}>
						{/* <PlayerButton title={"<<"} onPress={skipToPrevious} /> */}
						<PlayerButton icon={sMiddleButtonIcon} onPress={togglePlayback} />
						{/* <PlayerButton title={">>"} onPress={skipToNext} /> */}
					</View>
				</View> : null}
		</>
	);
}

AudioPlayerScreen.propTypes = {
	aPlaylist: PropTypes.arrayOf(Object),
	route: PropTypes.objectOf(Object),
	navigation: PropTypes.objectOf(Object)
};

AudioPlayerScreen.defaultProps = {
	aPlaylist: [oInitialTrackObject],
	route: {},
	navigation: {}
};