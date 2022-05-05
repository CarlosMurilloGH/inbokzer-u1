import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

export const app = firebase.initializeApp({
	apiKey: "AIzaSyBvpHavJwpcE6RXn6tb_zLPkt_aqHNsnXw",
	authDomain: "hobbitstore-c8be9.firebaseapp.com",
	projectId: "hobbitstore-c8be9",
	storageBucket: "hobbitstore-c8be9.appspot.com",
	messagingSenderId: "970586889103",
	appId: "1:970586889103:web:787f860e937b7e30a609fa",
	measurementId: "G-B4L994TL84"
});


export const auth = getAuth(app);
export default getFirestore(); 



