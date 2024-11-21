// 1- IMPORT DES ELTS UTILISES PAR LE COMPONENT------------------------------
// Style
import styles from "../styles/Login.module.css";
// Import pour le popover
import { Modal } from 'antd';
import { useEffect, useState } from 'react';

// 2- FUNCTION POUR AFFICHAGE -----------------------------------------------
function Login() {

// Initiation états
const [isModalVisible, setIsModalVisible] = useState(false);

const showModal = () => {
    setIsModalVisible(!isModalVisible);
};

let modalSignUpContent;
	if (!user.isConnected) {
		<SignUp/>
	}

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
                <h2 className={styles.titleH2}>See what's happening</h2>
                <h3 className={styles.titleH3}>Join Hackatweet today.</h3>
                <div className={styles.Btn}>
                    <button id="signin">Sign up</button>
                </div>
                <p className={styles.text}>Already have an account</p>
                <div className={styles.Btn}>
                    <button id="signup">Sign in</button>
                </div>
            </div>
        </div>
    );
}

// 3- EXPORT POUR QU'IL S'AFFICHE--------------------------------------------
export default Login;
