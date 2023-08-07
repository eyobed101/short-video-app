import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Video from "./components/Video";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
