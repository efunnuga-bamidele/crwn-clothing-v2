import {  initializeApp } from 'firebase/app';
import { getAuth, signWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCXNAGZ96ugabKhS_apy_6-CRlmVPxqrEg",
    authDomain: "crown-clothing-8c337.firebaseapp.com",
    projectId: "crown-clothing-8c337",
    storageBucket: "crown-clothing-8c337.appspot.com",
    messagingSenderId: "512571239795",
    appId: "1:512571239795:web:7cd1c2a73aca2173c8e906"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
        const userDocRef = doc(db, 'users', userAuth.uid);
        const userSnapshot = await getDoc(userDocRef)

        if (!userSnapshot.exists()){
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try{
                await setDoc(userDocRef, {
                    displayName,
                    email,
                    createdAt
                });
            }catch (error){
                console.log('error creating the user', error.message)
            }
        }
        return userDocRef;
  }
