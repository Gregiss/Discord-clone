import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
	apiKey: "AIzaSyA4lYKwWY6HAhJvs18VJag_vznGNgDLUOY",
	authDomain: "react-discord-clone.firebaseapp.com",
	databaseURL: "https://react-discord-clone.firebaseio.com",
	projectId: "react-discord-clone",
	storageBucket: "react-discord-clone.appspot.com",
	messagingSenderId: "495019808136"
 };
 firebase.initializeApp(config);


 export default firebase;