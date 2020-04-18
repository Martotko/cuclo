import firebase from 'react-native-firebase';

export default {
	signIn: (sEmail, sPassword) => {
		return firebase
			.auth()
			.signInWithEmailAndPassword(sEmail, sPassword);
	},
	signUp: (sEmail, sPassword) => {
		return firebase
			.auth()
			.createUserWithEmailAndPassword(sEmail, sPassword)
			.then(data => data.toJSON());
	},
	signOut: () => {
		firebase.auth().signOut();
	},
	isLoggedIn: () => { },
	authStateListener: fnCallback => {
		firebase.auth().onAuthStateChanged(fnCallback);
	},
};
