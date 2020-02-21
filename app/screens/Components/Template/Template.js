import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { AppVariables } from '../../../AppStyles';
import { StyleSheet } from 'react-native';

Template.propTypes = {
};

Template.defaultProps = {
};

const styles = StyleSheet.create({

});


export default function Template(props) {
	const { button, textButton } = styles;

	return (
		<TextInput
			placeholder={i18n.t('buttons.username')}
			value={username}
			onChangeText={setUsername}
		/>
	);
}



