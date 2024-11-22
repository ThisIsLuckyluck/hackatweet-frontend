import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
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

  const [tweetContent, setTweetContent] = useState("");

  const handleTweet = () => {
    fetch("http://localhost:3000/tweets/postTweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token,
        published_since: new Date(),
        content: tweetContent,
      }), //
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTweetContent("");
      });
  };

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
        <div className={styles.PrepTweet}>
          <h1 className={styles.HomeTitle}>Tweet</h1>
          <input
            className={styles.inputTweet}
            type="text"
            placeholder="What's Up ?"
            id="inputTweet"
            onChange={(e) => setTweetContent(e.target.value)}
            value={tweetContent}
          />
          <div className={styles.detailsTweet}>
            0/280
            <button
              className={styles.btnTweet}
              id="sendTweet"
              onClick={handleTweet}
            >
              Tweet
            </button>
          </div>
        </div>
        <div className={styles.Tweet}>
          <img src="avatar.png" alt="Avatar" className={styles.avatar} />
          <h3 className={styles.HeaderTweet}>
            {firstname}{" "}
            <span className={styles.usernamePost}>{username} - 6 hours</span>
          </h3>
          <p className={styles.contentTweet}>
            Le contenu du message est assez long pour voir si le coeur en
            dessous s'adapte bien au texte
          </p>
          <FontAwesomeIcon
            icon={faHeart}
            // onClick={() => handleLikeMovie()}
            className={styles.heartIconStyle}
          />{" "}
          1
        </div>
        <div className={styles.Tweet}>
          <img src="avatar.png" alt="Avatar" className={styles.avatar} />
          <h3 className={styles.HeaderTweet}>
            {firstname}{" "}
            <span className={styles.usernamePost}>{username} - 6 hours</span>
          </h3>
          <p className={styles.contentTweet}>Un autre message</p>
          <FontAwesomeIcon
            icon={faHeart}
            // onClick={() => handleLikeTweet()}
            className={styles.heartIconStyle}
          />{" "}
          1
        </div>
      </div>
      <div className={styles.homeRightSection}>
        <div className={styles.TrendContent}>
          <h1 className={styles.TrendTitle}>Trends</h1>
          <div className={styles.TrendsContainer}>
            <div className={styles.TrendsTag}>
              <h5 className={styles.TrendsNameTag}>#hashtagmention</h5>
              <p className={styles.TrendsNumberTag}>2 Tweets</p>
              <p className={styles.separator}>-------------------</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
