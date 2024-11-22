import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../reducers/users";
import { useRouter } from "next/router";

function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
  };

  const user = useSelector((state) => state.users.value);
  const firstname = user.username;
  const username = `@${user.username}`;

  if (!user.token) {
    router.push("/");
  }
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeLeftSection}>
        <div className={styles.ContainerlogoLeft}>
          <img src="Tweet.png" alt="Logo tweeter" className={styles.logoLeft} />
        </div>
        <div className={styles.ContainerUserInfos}>
          <div className={styles.UserInfos}>
            <img src="avatar.png" alt="Avatar" className={styles.avatar} />
            <div className={styles.firstnameLeft}>{firstname}</div>
            <div className={styles.usernameLeft}>{username}</div>
          </div>
          <div className={styles.Btnlogout}>
            <button className={styles.logout} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className={styles.homeMiddleSection}>
        <h1>Home</h1>
        <span className={styles.PrepTweet}>
          <input
            className={styles.inputTweet}
            type="text"
            placeholder="What's Up ?"
            id="inputTweet"
            // onChange={(e) => setSignInUsername(e.target.value)}
            // value={SignInUsername}
          />
          0/280
          <button
            className={styles.btnTweet}
            id="sendTweet"
            // onClick={handleSignIn}
          >
            Tweet
          </button>
        </span>
        <span className={styles.Tweet}>
          <img src="avatar.png" alt="Avatar" className={styles.avatar} />
          <h3 className={styles.HeaderTweet}>
            {firstname} {username} - 6 hours
          </h3>
          <p className={styles.contentTweet}>Le contenu du message</p>
          <FontAwesomeIcon
            icon={faHeart}
            /*onClick={() => handleLikeMovie()}*/
            className={styles.heartIconStyle}
          />
        </span>
      </div>
      <div className={styles.homeRightSection}>
        <h1>Trends</h1>
        <div className={styles.TrendsContainer}>#hackatweet : 2 Tweets</div>
      </div>
    </div>
  );
}

export default Home;
