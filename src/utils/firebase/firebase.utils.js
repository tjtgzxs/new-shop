// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBic2UaS5iIUd7zc_q5sZRYGD3tlPqQ2MI",
  authDomain: "crwn-clothing-db-53a1f.firebaseapp.com",
  projectId: "crwn-clothing-db-53a1f",
  storageBucket: "crwn-clothing-db-53a1f.appspot.com",
  messagingSenderId: "43110797304",
  appId: "1:43110797304:web:a11ccb68392b46dd7b500d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const signWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  addtionalInformation = {}
) => {
  // console.log(userAuth);
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  //if user not exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addtionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.map((el) => {
    console.log(el);
    const docRef = doc(collectionRef, el.title.toLowerCase());
    batch.set(docRef, el);
  });
  await batch.commit();
  console.log("dones");
};
export const createAuthFromEmailAndPassword = async (email, password) => {
  if (!email && !password) {
    return false;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const SignAuthByEmailAndPassowrd = async (email, password) => {
  if (!email && !password) {
    return false;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};
export const SignOutAuth = async () => signOut(auth);

export const onAuthChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;

    return acc;
  }, []);
  return categoryMap;
};
