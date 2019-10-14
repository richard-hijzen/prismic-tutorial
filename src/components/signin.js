import React, { useState } from 'react';
import { firebase } from '../firebase';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { FaUserAlt } from 'react-icons/fa';

class Signin extends React.Component {

    // The component's Local state.
    state = {
      isSignedIn: false // Local signed-in state.
    };
  
    // Configure FirebaseUI.
    uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
      }
    };
  
    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
      this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
          (user) => this.setState({isSignedIn: !!user})
      );
    }
    
    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
      this.unregisterAuthObserver();
    }
  
    render() {
      if (!this.state.isSignedIn) {
        return (
          <>
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
          </>
        );
      }
      return (
        <>
          <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
          <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        </>
      );
    }
  }

export default Signin;