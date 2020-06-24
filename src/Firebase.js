import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBTwg_b15Nk5DGLXIu2FK7afFw_GGwj3_Q",
    authDomain: "djamware-123.firebaseapp.com",
    databaseURL: "https://djamware-123.firebaseio.com",
    projectId: "djamware-123",
    storageBucket: "djamware-123.appspot.com",
    messagingSenderId: "146446427025",
    appId: "1:146446427025:web:d82da70dbe9c6d5167b030",
    measurementId: "G-DW7K9VGZ4L"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
