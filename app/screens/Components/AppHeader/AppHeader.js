import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {AppVariables} from '../../../AppStyles';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthService} from '../../../services';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 100,
		backgroundColor: AppVariables.appGrey,
		justifyContent: 'center',
		alignItems: 'flex-end',
		flexDirection: 'row',
	},
	text: {
		fontSize: AppVariables.appTitleFontSize,
		color: AppVariables.appWhite,
		paddingBottom: 10,
	},
	containerTitle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonStyle: {
		alignItems: 'flex-end',
		paddingHorizontal: 15,
		paddingBottom: 5,
	},
	iconStyle: {
		color: AppVariables.appGreyLight,
		fontSize: 40,
	},
});

export default class AppHeader extends Component {
	static propTypes = {
		navigation: PropTypes.object,
	};

	constructor(props) {
		super(props);
	}

	render() {
		const {
			container,
			containerTitle,
			buttonStyle,
			iconStyle,
			text,
		} = styles;

		return (
			<View style={container}>
				<View>
					<TouchableOpacity
						style={buttonStyle}
						onPress={() => this.props.navigation.openDrawer()}>
						<Icon name="ios-menu" style={iconStyle} />
					</TouchableOpacity>
				</View>
				<View style={containerTitle}>
					<Text style={text} numberOfLines={1}>
						{this.props.route?.name}
					</Text>
				</View>
				<View>
					<TouchableOpacity
						style={buttonStyle}
						onPress={() => AuthService.signOut()}>
						<Icon name="ios-log-out" style={iconStyle} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
