import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        This project was coded by {""}
        <a href="https://github.com/cechinaka" rel="noreferrer" target="_blank">
          Christie Chinaka
        </a>
        {""} and is on {""}
        <a
          href="https://github.com/cechinaka/react-wk4-weather-hw"
          rel="noreferrer" target="_blank"
        >
          GitHub 
        </a>
        {""} and hosted on {""}
        <a href="https://fantastic-alpaca-db7190.netlify.app/" rel="noreferrer" target="_blank">
          Netlify.
        </a>
      </footer>
    </div>
  );
}
