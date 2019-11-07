import React from "react";
import Info from "./Info";

const Story = ({ item }) => {
  const htmlDecode = input => {
    var e = document.createElement("textarea");
    e.innerHTML = input;
    return e.value;
  };

  const url = `https://news.ycombinator.com/item?id=${item.objectID}`;
  console.log(item);
  const article =
    item._tags[0] === "comment" ? (
      <div className="Story container">
        <a href={url}>
          <p className="black-text">
            <big>{item.story_title}</big>
          </p>
        </a>

        <Info item={item} />
        <div
          dangerouslySetInnerHTML={{
            __html: htmlDecode(item.comment_text)
          }}
        />
      </div>
    ) : (
      <div className="Story container">
        <a href={url}>
          <span className="black-text">
            <big>{item.title} </big>
          </span>
        </a>

        <a href={url}>
          <span className="grey-text">({item.url})</span>
        </a>

        <Info item={item} />
      </div>
    );
  return <div>{article}</div>;
};

export default Story;
