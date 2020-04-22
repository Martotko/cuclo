import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: "center"
  }
});

export default function PlayerButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

PlayerButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
};

PlayerButton.defaultProps = {
  title: "",
  onPress: () => { }
};
