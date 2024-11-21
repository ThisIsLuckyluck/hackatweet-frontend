// IMPORT DES ELTS UTILISES PAR LE COMPONENT
import styles from "../styles/global.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/router";

function SignIn() {
  // Initier états
  const [SignInUsername, setSignInUsername] = useState("");
  const [SignInPassword, setSignInPassword] = useState("");

  const router = useRouter();

  const handleSignIn = () => {
    fetch("http://localhost:3000/users/signin", {
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
          setSignInUsername("");
          setSignInPassword("");
        }
      });
    router.push("/home");
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
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default SignIn;
