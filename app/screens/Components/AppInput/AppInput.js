import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { AppVariables } from '../../../AppStyles';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
	textInput: {
		backgroundColor: AppVariables.appGreyLight,
		height: 40,
		width: '80%',
		borderRadius: 5,
		borderColor: AppVariables.appBorderColor,
		borderWidth: 1,
		marginBottom: 10,
		paddingLeft: 5
	}
});

export default class AppInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		}
	}

	/**
	 * @param {string} sText Text which comes from user input
	 * @private
	 */
	_setValue(sText) {
		this.setState({ value: sText })
	}

	render() {
		const { sPlaceholder } = this.props;
		const { textInput } = styles;
		const { value } = this.state;
		return (
			<TextInput
				style={textInput}
				placeholder={sPlaceholder}
				value={value}
				onChangeText={this._setValue.bind(this)}
			/>
		);
	}
}

AppInput.propTypes = {
	sPlaceholder: PropTypes.string
};

AppInput.defaultProps = {
	sPlaceholder: 'Placeholder'
};



