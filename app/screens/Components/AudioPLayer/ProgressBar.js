import React from 'react';
import { View, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';
import TrackPlayer from "react-native-track-player";

const styles = StyleSheet.create({
  progress: {
    height: 1,
    width: "90%",
    marginTop: 10,
    flexDirection: "row"
  }
});

export default function ProgressBar() {
  const progress = TrackPlayer.useTrackPlayerProgress();

  return (
    <View style={styles.progress}>
      <View style={{ flex: progress.position, backgroundColor: "red" }} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: "grey"
        }}
      />
    </View>
  );
}

ProgressBar.propTypes = {};

ProgressBar.defaultProps = {};
