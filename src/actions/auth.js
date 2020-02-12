import {firebase, googleAuthProvider, githubAuthProvider} from '../firebase/firebase';

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const startGithubLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(githubAuthProvider);
    }
}

export const startLogout= () => {
    return () => {
        return firebase.auth().signOut();
    }
}

export const login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}