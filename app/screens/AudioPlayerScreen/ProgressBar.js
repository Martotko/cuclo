import React from 'react';
import { View, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';
import TrackPlayer from "react-native-track-player";
import { AppVariables } from '../../AppStyles';

const styles = StyleSheet.create({
  progress: {
    height: 10,
    width: "90%",
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: AppVariables.colorMedium
  }
});

export default function ProgressBar() {
  const progress = TrackPlayer.useTrackPlayerProgress();
  const { colorRed, colorMedium } = AppVariables;

  return (
    <View style={styles.progress}>
      <View style={{
        flex: progress.position,
        backgroundColor: colorRed
      }} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: colorMedium
        }}
      />
    </View>
  );
}

ProgressBar.propTypes = {};

ProgressBar.defaultProps = {};
