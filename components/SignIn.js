// IMPORT DES ELTS UTILISES PAR LE COMPONENT
import styles from "../styles/global.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/users";

function SignIn() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.value);

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
          dispatch(login({ username: SignInUsername, token: data.token }));
          setSignInUsername("");
          setSignInPassword("");
        }
      });
  };

  if (user.token) {
    router.push("/home");
  }

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
