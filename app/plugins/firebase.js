import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp(spat.config.firebase);

var db = firebase.firestore();

if (spat.isBrowser) {
  db.settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
  });
}

global.db = db;

module.exports = firebase;
