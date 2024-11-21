// IMPORT DES ELTS UTILISES PAR LE COMPONENT

import styles from "../styles/Login.module.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useState } from "react";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Login() {
  // initier les états
  const [isSignUpVisible, setisSignUpVisible] = useState(false);
  let modalSignUp;
  const [isSignInVisible, setisSignInVisible] = useState(false);
  let modalSignIn;

  modalSignUp = (
    <div>
      <div className={styles.btnCloseContainer}>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.btnClose}
          onClick={() => handleSignUpOne()}
        />
      </div>
      <div>
        <SignUp />
      </div>
    </div>
  );
  const handleSignUpOne = () => {
    setisSignUpVisible(!isSignUpVisible);
  };

  modalSignIn = (
    <div>
      <div className={styles.btnCloseContainer}>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.btnClose}
          onClick={() => handleSignInOne()}
        />
      </div>
      <div>
        <SignIn />
      </div>
    </div>
  );
  const handleSignInOne = () => {
    setisSignInVisible(!isSignInVisible);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLeftSection}>
        <span>
          <img className={styles.logoLeft} src="Tweet.png" alt="Logo Tweeter" />
        </span>
      </div>

      <div className={styles.loginRightSection}>
        <span>
          <img
            className={styles.logoRight}
            src="Tweet.png"
            alt="Logo Tweeter"
          />
        </span>
        <div className={styles.textContainer}>
          <h2 className={styles.titleH2}>See what's happening</h2>
          <h3 className={styles.titleH3}>Join Hackatweet today.</h3>
          <div>
            <button
              className={styles.btnSignUp}
              id="signup"
              onClick={() => handleSignUpOne()}
            >
              Sign up
            </button>
          </div>
          {isSignUpVisible && (
            <div id="react-modals">
              <Modal
                className={styles.modal}
                getContainer="#react-modals"
                open={isSignUpVisible}
                closable={false}
                footer={null}
              >
                {modalSignUp}
              </Modal>
            </div>
          )}
          <p className={styles.text}>Already have an account ?</p>
          <div>
            <button
              className={styles.btnSignIn}
              id="signin"
              onClick={() => handleSignInOne()}
            >
              Sign in
            </button>
          </div>
          {isSignInVisible && (
            <div id="react-modals">
              <Modal
                className={styles.modal}
                getContainer="#react-modals"
                open={isSignInVisible}
                closable={false}
                footer={null}
              >
                {modalSignIn}
              </Modal>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 3- EXPORT POUR QU'IL S'AFFICHE--------------------------------------------
export default Login;
