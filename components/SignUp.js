//IMPORT DES ELTS UTILISES PAR LE COMPONENT
import styles from "../styles/SignUp.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/users";

function SignUp() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.value);

  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const router = useRouter();

  const handleSignUp = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: signUpFirstname,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: signUpUsername, token: data.token }));
          setSignUpFirstname("");
          setSignUpUsername("");
          setSignUpPassword("");
        }
      });
  };

  if (user.token) {
    router.push("/home");
  }

  return (
    <div className={styles.registerContainer}>
      <div>
        <img className={styles.logoRight} src="Tweet.png" alt="Logo Tweeter" />
      </div>

      <div className={styles.InputSignUpContainer}>
        <p className={styles.text}>Create your Hackatweet account</p>
        <input
          className={styles.InputSignUp}
          type="text"
          placeholder="Firstname"
          id="signUpFirstname"
          onChange={(e) => setSignUpFirstname(e.target.value)}
          value={signUpFirstname}
        />
        <input
          className={styles.InputSignUp}
          type="text"
          placeholder="Username"
          id="signUpUsername"
          onChange={(e) => setSignUpUsername(e.target.value)}
          value={signUpUsername}
        />
        <input
          className={styles.InputSignUp}
          type="password"
          placeholder="Password"
          id="signUpPassword"
          onChange={(e) => setSignUpPassword(e.target.value)}
          value={signUpPassword}
        />
        <button
          className={styles.btnSignUp}
          id="register"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
