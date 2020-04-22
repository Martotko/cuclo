import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default {
	signIn: (sEmail, sPassword) => {
		return auth()
			.signInWithEmailAndPassword(sEmail, sPassword);
	},
	signUp: (sEmail, sPassword) => {
		return auth()
			.createUserWithEmailAndPassword(sEmail, sPassword)
			.then(data => data.toJSON());
	},
	signOut: () => {
		auth().signOut();
	},
	isLoggedIn: () => { },
	authStateListener: fnCallback => {
		auth().onAuthStateChanged(fnCallback);
	},
	getTales: () => {
		return database().ref().once('value');
	}
};
