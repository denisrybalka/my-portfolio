import React from "react";
import WorkItem from "./components/WorkItem";

import "./scss/App.scss";

import jsonData from "./data.json";

const App = () => {
  const { data } = jsonData;

  return (
    <div className='App'>
      <div className='container'>
        <h1></h1>
        <img src={require("./assets/cat.webp")} />

        <div className='socials'>
          <a
            className='social'
            href='https://github.com/denisrybalka'
            target={"_blank"}
          >
            <img src={require("./assets/github.png")} />
            <span>Take a look at GitHub</span>
          </a>
          <a
            className='social'
            href='https://t.me/denisrybalka10'
            target={"_blank"}
          >
            <img src={require("./assets/telegram.png")} />
            <span>Contact me on Telegram</span>
          </a>
          <a
            className='social'
            href='mailto:denis.rubalka1@gmail.com'
            target={"_blank"}
          >
            <img src={require("./assets/mail.png")} />
            <span>Send me an email</span>
          </a>
          <a
            className='social'
            href='CV Denis Rybalka — Frontend Developer.pdf'
            download
          >
            <img src={require("./assets/cv.png")} />
            <span>Download my CV</span>
          </a>
        </div>

        <h2>😎 My besties list:</h2>
        <article>
          <h2>❤️ HTML5/CSS3 ❤️</h2>
          <h2>❤️ SASS/SCSS/LESS ❤️</h2>
          <h2>❤️ JavaScript ❤️</h2>
          <h2>❤️ TypeScript ❤️</h2>
          <h2>❤️ React ❤️</h2>
          <h2>❤️ React Native ❤️</h2>
          <h2>❤️ Redux (Toolkit, Saga) ❤️</h2>
          <h2>❤️ NodeJS ❤️</h2>
          <h2>❤️ MongoDB ❤️</h2>
          <h2>❤️ Git (GitHub, Bitbucket) ❤️</h2>
          <h2>❤️ Postman ❤️</h2>
        </article>

        <h2>🧐 My latest works</h2>
        <div className='itemsList'>
          {data.map((item, i) => {
            return (
              <WorkItem
                scotchNumber={(i % 4) + 1}
                data={{ ...item, i }}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
