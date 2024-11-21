// 1- IMPORT DES ELTS UTILISES PAR LE COMPONENT------------------------------
// Style
import styles from "../styles/Login.module.css";
// Compo Enfant
import SignUp from "./SignUp";
import SignIn from "./SignIn";
// Import pour états
import { useState } from "react"; // importer la fonction hook useState
// Import pour le modal
import { Modal } from "antd"; //need action in terminal: yarn add andtd
// FaAwsome icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //need action in terminal: yarn add etc ..
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// 2- FUNCTION POUR AFFICHAGE -----------------------------------------------
function Login() {
  // initier les états
  const [isSignUpVisible, setisSignUpVisible] = useState(false);
  let modalSingUp;
  const [isSignInVisible, setisSignInVisible] = useState(false);
  let modalSingIn;

  //-------------------------------------------------------------------------------------------------
  modalSingUp = (
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

  modalSingIn = (
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
        {/* <span><img className={styles.loginBackgroundImg} src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png" alt="Welcome Iamge"/></span> */}
        <span>
          <img
            className={styles.logoLeft}
            src="https://hackatweet-frontend-two.vercel.app/_next/image?url=%2Flogo.png&w=640&q=75"
            alt="Logo Tweeter"
          />
        </span>
      </div>

      <div className={styles.loginRightSection}>
        <span>
          <img
            className={styles.logoRight}
            src="https://hackatweet-frontend-two.vercel.app/_next/image?url=%2Flogo.png&w=128&q=75"
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
                visible={isSignUpVisible}
                closable={false}
                footer={null}
              >
                {modalSingUp}
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
                visible={isSignInVisible}
                closable={false}
                footer={null}
              >
                {modalSingIn}
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
