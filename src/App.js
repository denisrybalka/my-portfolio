import React from 'react'
import { uid } from 'uid';
import WorkItem from './components/WorkItem';

import "./scss/App.scss";

import jsonData from "./data.json";

const App = () => {
  const [data, setData] = React.useState(jsonData.data);

  return (
    <div className="App">
      <div className="container">
        <h1></h1>
        <img src={require("./assets/cat.webp")} />
        {/* <p>I'm glad you're interested in me. Below you can see links on how to get me and a couple of my latest works.</p> */}

        <div className="socials">
          <a className="social" href="https://github.com/denisrybalka" target={"_blank"}>
            <img src={require("./assets/github.png")} />
            <span>Take a look at GitHub</span>
          </a>
          <a className="social" href="https://t.me/hahahacker" target={"_blank"}>
            <img src={require("./assets/telegram.png")} />
            <span>Contact me on Telegram</span>
          </a>
          <a className="social" href="mailto:denis.rubalka1@gmail.com" target={"_blank"}>
            <img src={require("./assets/mail.png")} />
            <span>Send me an email</span>
          </a>
        </div>

          <h2>😎 My besties list:</h2>
        <article>
          <h2>❤️ HTML5/CSS ❤️</h2>
          <h2>❤️ SASS/SCSS ❤️</h2>
          <h2>❤️ JavaScript ❤️</h2>
          <h2>❤️ TypeScript ❤️</h2>
          <h2>❤️ React ❤️</h2>
          <h2>❤️ Redux ❤️</h2>
          <h2>❤️ NodeJS ❤️</h2>
          <h2>❤️ MongoDB ❤️</h2>
          <h2>❤️ Git ❤️</h2>
        </article>

        <h2>🧐 My latest works</h2>
        <div className="itemsList">
          {
            data.map((item, el) => {
              const id = uid();
              return (
                <WorkItem
                  scotchNumber={(el % 4) + 1}
                  data={{...item, id}}
                  key={id}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
