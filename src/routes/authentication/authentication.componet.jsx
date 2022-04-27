// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import {
  //   auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  //   signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../componets/sign-up-form/sign-up-form.componet';
import SignInForm from '../../componets/sign-in-form/sign-in-form.componet';
import './authentication.styles.scss';

const Authentication = () => {
  //   useEffect(() => {
  //     (async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     })();
  //   }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  //   const logGoogleRediretUser = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //     console.log({ user });
  //   };

  return (
    <div className='authentication-container'>
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
