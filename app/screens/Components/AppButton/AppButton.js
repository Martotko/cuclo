import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { AppVariables } from '../../../AppStyles';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: AppVariables.appGrey,
    width: '80%',
    marginBottom: 10,
    borderRadius: AppVariables.appButtonBorderRadius,
  },
  textButton: {
    color: AppVariables.appWhite,
    fontSize: AppVariables.appButtonFontSize,
    textAlign: 'center',
  },
});

export default function AppButton(props) {
  const { button, textButton } = styles;
  const { fnPress, sText } = props;

  return (
    <TouchableOpacity style={button} onPress={fnPress}>
      <Text style={textButton}>{sText}</Text>
    </TouchableOpacity>
  );
}

AppButton.propTypes = {
  fnPress: PropTypes.func,
  sText: PropTypes.string,
};

AppButton.defaultProps = {
  sText: 'Click me',
  fnPress: () => {},
};
