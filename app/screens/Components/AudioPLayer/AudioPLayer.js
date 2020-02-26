import React, {Component} from 'react';
import Video from 'react-native-video';
import {StyleSheet, View} from 'react-native';
import IconButton from '../IconButton';
import AppStyles from '../../../AppStyles';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		height: 75,
		backgroundColor: 'green',
	},
});
export default class AudioPLayer extends Component {
	constructor(props) {
		super(props);

		this.player = React.createRef();
		this.state = {
			bIsPlaying: false,
		};
	}

	/**
	 * Toggle Play/Pause
	 * @private
	 */
	_togglePlay() {
		console.log(this.player.current);

		this.setState({bIsPlaying: !this.state.bIsPlaying});
	}

	render() {
		const {container} = styles;
		const {center} = AppStyles;
		const {bIsPlaying} = this.state;
		const sintel = require('./background.wav');
		return (
			<>
				<View style={[container, center]}>
					<IconButton nSize={30} sIcon="ios-skip-backward" />
					{bIsPlaying ? (
						<IconButton
							nSize={50}
							sIcon="ios-play"
							fnPress={this._togglePlay.bind(this)}
						/>
					) : (
						<IconButton
							nSize={50}
							sIcon="ios-pause"
							fnPress={this._togglePlay.bind(this)}
						/>
					)}
					<IconButton nSize={30} sIcon="ios-skip-forward" />
				</View>

				<IconButton nSize={30} sIcon="ios-shuffle" />
				<IconButton nSize={30} sIcon="ios-star" />
				<IconButton nSize={30} sIcon="ios-star-outline" />
				<Video
					paused={bIsPlaying}
					source={sintel} // Can be a URL or a local file.
					ref={this.player} // Store reference
					// onBuffer={this.onBuffer} // Callback when remote video is buffering
					// onError={this.videoError} // Callback when video cannot be loaded
				/>
			</>
		);
	}
}

AudioPLayer.propTypes = {};

AudioPLayer.defaultProps = {};
