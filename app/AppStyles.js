import { StyleSheet } from 'react-native';

export const AppVariables = {
	appGrey: '#a99f9f',
	appGreyLight: '#f1f0f0',
	appBorderColor: '#444',
	appWhite: '#fff',
	appButtonFontSize: 20,
	appOrange: '#ffa401'
}

const AppStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},

});

export default AppStyles;
