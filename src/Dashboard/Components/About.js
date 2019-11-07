import React from "react";

const About = () => {
  return (
    <div className="About container">
      <div className="container">
        <p id="about">About</p>
      </div>
      <div className="AboutInfo container">
        <p className="grey-text">
          HN Search provides real-time full-text search for the
          {<a href="https://news.ycombinator.com/"> HackerNews </a>} community
          site. Source code is available on
          {<a href="https://github.com/algolia/hn-search"> GitHub </a>}. The
          search backend is implemented using
          {<a href="https://www.algolia.com/"> Algolia </a>} instant search
          engine.
        </p>
        <h5>How it works</h5>
        <p className="grey-text">
          Items are updated in real-time using official
          {<a href="https://github.com/HackerNews/API"> HackerNews API </a>}.
          Data is indexed on 3 different servers for high availability, hosted
          in Beauharnois, Canada.
        </p>
        <h5>Credits</h5>
        <p className="grey-text">
          Special thanks to
          {<a href="https://firebase.google.com"> FireBase</a>},
          {<a href="https://octopart.com/"> Octopart </a>} and
          {<a href="https://news.ycombinator.com/"> YC </a>}teams for providing
          us the data
        </p>
      </div>
    </div>
  );
};

export default About;
