import React, { useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import i18n from '../../i18n';
import AppButton from '../Components/AppButton';
import AppStyles, { AppVariables } from '../../AppStyles';
import AuthService from "../../services/AuthService";

const styles = StyleSheet.create({
  firstContainer: {
    flex: 3,
    width: '100%',
  },
  secondContainer: {
    flex: 4,
    backgroundColor: AppVariables.appOrange,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'stretch',
  },
});

export default function AuthHomeScreen({ navigation }) {
  useEffect(() => {
    const oAuthListener = AuthService.authStateListener((data) => {
      data ? navigation.navigate('App') : navigation.navigate('Auth');
    });

    return () => {
      oAuthListener && oAuthListener();
    };
  }, []);

  const { container, center } = AppStyles;
  const { firstContainer, secondContainer, image } = styles;
  return (
    <View style={container}>
      <View style={[center, firstContainer]}>
        <Image style={image} source={require('../../assets/Cuclo-logo.png')} />
      </View>
      <View style={[center, secondContainer]}>
        <AppButton
          sText={i18n.t('buttons.signIn')}
          fnPress={() => {
            navigation.navigate('SignIn');
          }}
        />
        <AppButton
          sText={i18n.t('buttons.signUp')}
          fnPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </View>
  );
}

AuthHomeScreen.propTypes = {
  navigation: PropTypes.objectOf(Object),
};

AuthHomeScreen.defaultProps = {
  navigation: {},
};
