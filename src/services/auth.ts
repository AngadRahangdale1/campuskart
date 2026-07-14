import {auth} from './firebaseConfig';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updatePassword,
    updateEmail,
    onAuthStateChanged, // this is the function that listens for changes in the user's authentication state
    User,
} from 'firebase/auth';

export const signup = (
    email: string,
    password: string ) => 
createUserWithEmailAndPassword(auth, email, password);

export const login = (
    email: string,
    password: string ) =>
signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const subscribeToAuthChanges = ( // This function allows you to subscribe to changes in the user's authentication state
    callback : (user: User | null) => void ) =>
onAuthStateChanged(auth, callback);

export const resetPassword = (email: string) =>
sendPasswordResetEmail(auth, email);

export const changePassword = (newPassword: string) =>{
    if(auth.currentUser){
        return updatePassword(auth.currentUser, newPassword);
    }
    else {
        throw new Error('No user is currently signed in.');
    }
}

export const changeEmail = (newEmail: string) => {
    if(auth.currentUser){
        return updateEmail(auth.currentUser, newEmail);
    }
    else {
        throw new Error('No user is currently signed in.');
    }
}