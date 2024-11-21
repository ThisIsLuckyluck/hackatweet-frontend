// 1- IMPORT DES ELTS UTILISES PAR LE COMPONENT------------------------------
// Style
import styles from "../styles/SignUp.module.css";
// FaAwsome icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// 2- FUNCTION POUR AFFICHAGE -----------------------------------------------
function SignUp() {
    
        return (
            <div className={styles.registerContainer}>                    
                    <div>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>

                    <div>
                        <img
                        className={styles.logoRight}
                        src="https://hackatweet-frontend-two.vercel.app/_next/image?url=%2Flogo.png&w=128&q=75"
                        alt="Logo Tweeter"/>
                    </div>

                    <div>
                        <p>Create your Hackatweet account</p>
                        <input className={styles.inputSignUp} type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
                        <input className={styles.inputSignUp} type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                        <input className={styles.inputSignUp} type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                        <button className={styles.btnSignUp} id="register" onClick={() => handleRegister()}>Sign Up</button>
                    </div>

                    
            </div>
        );
    }
    
    // 3- EXPORT POUR QU'IL S'AFFICHE--------------------------------------------
    export default SignUp;
    