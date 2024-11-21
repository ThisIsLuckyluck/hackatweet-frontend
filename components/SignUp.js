// 1- IMPORT DES ELTS UTILISES PAR LE COMPONENT------------------------------
// Style
import styles from "../styles/SignUp.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

// 2- FUNCTION POUR AFFICHAGE -----------------------------------------------
function SignUp() {
  // Pour dispatcher info dans état initial
  //const dispatch = useDispatch();

  // Initier états
  const [signUpFirstname, setSignUpFirstname] = useState(""); // initialiser l'état
  const [signUpUsername, setSignUpUsername] = useState(""); // initialiser l'état
  const [signUpPassword, setSignUpPassword] = useState(""); // initialiser l'état
  const [isSignUpVisible, setisSignUpVisible] = useState(false);

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
          //dispatch(login({ username: signUpUsername, token: data.token }));
          setSignUpFirstname("");
          setSignUpUsername("");
          setSignUpPassword("");
          setIsModalVisible(false);
        }
      });
    router.push("/home");
  };

  // const handleClose = () => {
  //   setisSignUpVisible(!isSignUpVisible);
  //   console.log("click fonctionne", isSignUpVisible);
  // };

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
          onClick={() => handleSignUp()}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

// 3- EXPORT POUR QU'IL S'AFFICHE--------------------------------------------
export default SignUp;
