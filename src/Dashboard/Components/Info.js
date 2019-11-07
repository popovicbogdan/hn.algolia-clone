import React from "react";
import JavascriptTimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ReactTimeAgo from "react-time-ago";

const Info = ({ item }) => {
  JavascriptTimeAgo.locale(en);
  // console.log(item);

  const a_link = "https://news.ycombinator.com/item?id=" + item.story_id;
  // console.log(a_link);
  const userLink = "https://news.ycombinator.com/user?id=" + item.author;
  return (
    <ul id="info">
      <li>
        <a href={a_link}>{item.points ? item.points : 0} points</a>
      </li>
      <li>|</li>
      <li>
        <a href={userLink}>{item.author}</a>
      </li>
      <li>|</li>
      <li>
        <a href={a_link}>
          <ReactTimeAgo date={item.created_at} />
        </a>
      </li>
      <br />
    </ul>
  );
};

export default Info;
