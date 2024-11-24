import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
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
  const [tweets, setTweets] = useState([]);

  const CreateTweet = () => {
    if (!tweetContent.trim()) return;

    fetch("http://localhost:3000/tweets/postTweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token,
        published_since: new Date(),
        content: tweetContent,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setTweets((prevTweets) => [
            {
              content: data.data.content,
              published_since: data.data.published_since,
            },
            ...prevTweets,
          ]);
          setTweetContent("");
        }
      })
      .catch((err) => console.error(err));
  };

  const DeleteTweet = (tweetId) => {
    fetch("http://localhost:3000/tweets/deleteById", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: tweetId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "Tweet has been deleted") {
          setTweets((prevTweets) =>
            prevTweets.filter((tweet) => tweet._id !== tweetId)
          );
        }
      })
      .catch((err) => console.error(err));
  };

  if (!user.token) {
    router.push("/");
    return null;
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
            {tweetContent.length}/280
            <button
              className={styles.btnTweet}
              id="sendTweet"
              onClick={CreateTweet}
            >
              Tweet
            </button>
          </div>
        </div>
        <div className={styles.TweetsList}>
          {tweets.map((tweet, index) => (
            <div className={styles.Tweet} key={index}>
              <img src="avatar.png" alt="Avatar" className={styles.avatar} />
              <h3 className={styles.HeaderTweet}>
                {firstname}{" "}
                <span className={styles.usernamePost}>
                  {username} -{" "}
                  {new Date(tweet.published_since).toLocaleTimeString()}
                </span>
              </h3>
              <p className={styles.contentTweet}>{tweet.content}</p>
              <FontAwesomeIcon
                icon={faHeart}
                className={styles.heartIconStyle}
              />{" "}
              <FontAwesomeIcon
                icon={faTrash}
                className={styles.TrashIconStyle}
                onClick={() => DeleteTweet(tweet._id)}
              />{" "}
            </div>
          ))}
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
