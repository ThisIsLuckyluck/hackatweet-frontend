// 1- IMPORT DES ELTS UTILISES PAR LE COMPONENT------------------------------
// Style
//import styles from "../styles/Login.module.css";

// 2- FUNCTION POUR AFFICHAGE -----------------------------------------------
function SignUp() {
    
        return (
            <div className={styles.registerContainer}>                    
                    <span>
                        <img
                        className={styles.logoRight}
                        src="https://hackatweet-frontend-two.vercel.app/_next/image?url=%2Flogo.png&w=128&q=75"
                        alt="Logo Tweeter"/>
                    </span>
                    <p>Create your Hackatweet account</p>
                    <input type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
                    <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                    <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                    <button id="register" onClick={() => handleRegister()}>Sign Up</button>
            </div>
        );
    }
    
    // 3- EXPORT POUR QU'IL S'AFFICHE--------------------------------------------
    export default SignUp;
    