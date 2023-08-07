import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Video from "./components/Video";
import { short1, short2, short3,short4,short5,short6 } from "./assets/posts";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url={short1}
          channel="nabendu82"
          description="blowing air"
          song="I am a Windows PC"
          likes={345}
          shares={200}
          messages={90}
        />
        <Video
          url={short2}
          channel="thewebdev"
          description="Tuesday morning editing on kdenlive in Windows"
          song="Kdenlive is great"
          likes={445}
          shares={290}
          messages={109}
        />
        <Video
          url={short3}
          channel="thewebdev"
          description="Tuesday morning editing on kdenlive in Windows"
          song="Kdenlive is great"
          likes={445}
          shares={290}
          messages={109}
        />
        <Video
          url={short4}
          channel="thewebdev"
          description="Tuesday morning editing on kdenlive in Windows"
          song="Kdenlive is great"
          likes={445}
          shares={290}
          messages={109}
        />
        <Video
          url={short5}
          channel="thewebdev"
          description="Tuesday morning editing on kdenlive in Windows"
          song="Kdenlive is great"
          likes={445}
          shares={290}
          messages={109}
        />
        <Video
          url={short6}
          channel="thewebdev"
          description="Tuesday morning editing on kdenlive in Windows"
          song="Kdenlive is great"
          likes={445}
          shares={290}
          messages={109}
        />
      </div>
    </div>
  );
}

export default App;
