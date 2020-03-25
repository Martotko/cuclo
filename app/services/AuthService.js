import firebase from 'react-native-firebase';

export default {
	signIn: function(sUsername, sPassword) {
		firebase
			.auth()
			.signInWithEmailAndPassword(sUsername, sPassword)
			.then(data => console.log('here', data));
	},
	signUp: (sUsername, sPassword) => {},
	signOut: () => {},
};
