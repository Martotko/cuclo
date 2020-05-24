import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { AppVariables } from '../../../AppStyles';


const styles = StyleSheet.create({
	textInput: {
		backgroundColor: AppVariables.colorLight,
		height: 60,
		width: '80%',
		borderRadius: AppVariables.appButtonBorderRadius,
		borderColor: AppVariables.appBorderColor,
		borderWidth: 1,
		marginBottom: 10,
		fontSize: AppVariables.fontSizeHeavy,
		paddingLeft: 5,
	},
});

function AppInput({ sPlaceholder }, ref) {
	const [value, setValue] = useState('');
	const { textInput } = styles;

	return (
		<TextInput
			ref={ref}
			style={textInput}
			placeholder={sPlaceholder}
			value={value}
			onChangeText={e => setValue(e)}
		/>
	);
}

export default React.forwardRef(AppInput);

AppInput.propTypes = {
	sPlaceholder: PropTypes.string,
};

AppInput.defaultProps = {
	sPlaceholder: 'Placeholder',
};
