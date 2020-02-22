import React from 'react';
import {Image, View} from 'react-native';
import i18n from '../../i18n';
import AppButton from '../Components/AppButton';
import AppStyles, {AppVariables} from '../../AppStyles';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';

AppButton.propTypes = {
	navigation: PropTypes.object,
};

AppButton.defaultProps = {
	navigation: {},
};

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

export default function AuthHomeScreen({navigation}) {
	const {container, center} = AppStyles;
	const {firstContainer, secondContainer, image} = styles;
	return (
		<View style={container}>
			<View style={[center, firstContainer]}>
				<Image
					style={image}
					source={require('../../assets/Cuclo-logo.png')}
				/>
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
