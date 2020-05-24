import { StyleSheet } from 'react-native';

export const AppVariables = {
	appBorderColor: '#444',
	appWhite: '#fff',
	appBlack: '#000',
	appOrange: '#ffa401',
	appButtonBorderRadius: 5,
	appErrorColor: "#f54251",
	fontSizeLight: 16,
	fontSizeMedium: 22,
	fontSizeHeavy: 28,
	colorBackground: "white",
	colorPrimaryText: 'black',
	colorRed: 'red',
	colorLight: '#f1f0f0',
	colorMedium: '#cfc8c8',
	colorHeavy: '#a99f9f'
};

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
