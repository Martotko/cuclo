import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { AppVariables } from '../../../AppStyles';

const styles = StyleSheet.create({
  error: {
    width: '100%',
    fontSize: 22,
    color: AppVariables.appErrorColor
  },
});

export default function AppError({ sMessage }) {
  const { error } = styles;

  return (
    <Text
      textAlign='center'
      ellipsizeMode='tail'
      numberOfLines={5}
      style={error}>
      {sMessage}
    </Text>
  );
}

AppError.propTypes = {
  sMessage: PropTypes.string,
};

AppError.defaultProps = {
  sMessage: "",
};
