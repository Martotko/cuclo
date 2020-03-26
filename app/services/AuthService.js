import firebase from 'react-native-firebase';

export default {
	signIn: function(sEmail, sPassword) {
		firebase
			.auth()
			.signInWithEmailAndPassword(sEmail, sPassword)
			.then(data => {
				//TODO store the user data
			});
	},
	signUp: (sEmail, sPassword) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(sEmail, sPassword)
			.then(data => data.toJSON())
			.then(data => {
				//TODO store the user data
			});
	},
	signOut: () => {
		firebase.auth().signOut();
	},
	isLoggedIn: () => {},
	authStateListener: fnCallback => {
		firebase.auth().onAuthStateChanged(fnCallback);
	},
};
