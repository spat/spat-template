import firebase from 'firebase/compat/app';

import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

firebase.initializeApp(spat.config.firebase);

export default firebase;