import React, { useState, createContext } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const LoadingContext = createContext({
	loadingCount: false,
	showLoading: () => { },
	stopLoading: () => { }
})

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center'
	},
});

function LoadingSpinner() {
	return (
		<ActivityIndicator style={styles.container} size="large" color="#0000ff" />
	)
}

export function LoadingProvider({ children }) {
	const [loading, toggleLoading] = useState({ bIsLoading: false });

	const showLoading = () => toggleLoading({ bIsLoading: true });

	const stopLoading = () => toggleLoading({ bIsLoading: false });

	return (
		<LoadingContext.Provider value={{
			bIsLoading: loading.bIsLoading,
			showLoading,
			stopLoading
		}}>
			{children}
			{loading.bIsLoading ? <LoadingSpinner /> : null}
		</LoadingContext.Provider >
	)
}

LoadingProvider.propTypes = {
	children: PropTypes.objectOf(Object),
}

LoadingProvider.defaultProps = {
	children: {},
}

export default LoadingContext;