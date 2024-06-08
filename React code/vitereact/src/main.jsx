import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Cuatom App</h1>
    </div>
  );
}

const ReactElement = {
  type: "a",
  props: {
    href: "www.google.com",
    target: "_blank",
  },

  children: "Click me to visit again",
};

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const anothervar = "NAyab and Code";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  " Click me to Visit Google",
  anothervar
);

ReactDOM.createRoot(document.getElementById("root")).render(
  reactElement
  // <App />
);
