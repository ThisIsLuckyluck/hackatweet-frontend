// 1- IMPORT DES ELTS UTILISES PAR LE COMPONENT------------------------------
// Style
import styles from "../styles/SignIn.module.css";
// FaAwsome icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //need action in terminal: yarn add etc ..
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// états
import { useState } from "react"; // importer la fonction hook useState

// 2- FUNCTION POUR AFFICHAGE -----------------------------------------------
function SignIn() {
  // Pour dispatcher info dans état initial
  //const dispatch = useDispatch();

  // Initier états
  const [SignInFirstname, setSignInFirstname] = useState(""); // initialiser l'état
  const [SignInUsername, setSignInUsername] = useState(""); // initialiser l'état
  const [SignInPassword, setSignInPassword] = useState(""); // initialiser l'état

  const handleSignInTwo = () => {
    fetch("http://localhost:3000/users/SignIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: SignInUsername,
        password: SignInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          //dispatch(login({ username: SignInUsername, token: data.token }));
          setSignInFirstname("");
          setSignInUsername("");
          setSignInPassword("");
          setIsModalVisible(false);
        }
      });
  };

  return (
    <div className={styles.container}>
      <button className={styles.exitButton}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className={styles.signInContainer}>
        <img className={styles.logoRight} src="Tweet.png" alt="Logo Tweeter" />
      </div>

      <div className={styles.formContainer}>
        <p>Connect to your Hackatweet account</p>
        <input
          className={styles.inputSignIn}
          type="text"
          placeholder="Username"
          id="SignInUsername"
          onChange={(e) => setSignInUsername(e.target.value)}
          value={SignInUsername}
        />
        <input
          className={styles.inputSignIn}
          type="password"
          placeholder="Password"
          id="SignInPassword"
          onChange={(e) => setSignInPassword(e.target.value)}
          value={SignInPassword}
        />
        <button
          className={styles.btnSignIn}
          id="register"
          onClick={handleSignInTwo}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignIn;
