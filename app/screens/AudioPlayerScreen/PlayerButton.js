import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppVariables } from '../../AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  iconStyle: {
    textAlign: 'center',
    fontSize: 60,
    color: AppVariables.colorPrimaryText,
  }
});

export default function PlayerButton({ icon, onPress }) {
  const [sIcon, setIcon] = useState();

  useEffect(() => {
    if (icon) {
      setIcon(icon);
    }
  }, [icon]);

  const { container, iconStyle } = styles;

  return (
    <TouchableOpacity style={container} onPress={onPress}>
      <Icon name={sIcon} style={iconStyle} />
    </TouchableOpacity>
  );
}

PlayerButton.propTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func
};

PlayerButton.defaultProps = {
  icon: "ios-play",
  onPress: () => { }
};
