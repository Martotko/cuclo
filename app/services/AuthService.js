import firebase from 'react-native-firebase';
import database from '@react-native-firebase/database';

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
	getTales: () => {
		return database().ref().once('value');
	}
};
