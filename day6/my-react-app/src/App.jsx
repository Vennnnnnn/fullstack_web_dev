import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Welcome from "./components/welcome.jsx";
import Counter from "./components/Counter.jsx";
import LikeButton from "./components/LikeButton.jsx";
import TeamMember from "./components/TeamMember.jsx";
import Clicker from "./components/Clicker.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div>
        <TeamMember name="Ali" role="Designer" image="..." />
<TeamMember name="Siti" role="Engineer" image="..." />
<TeamMember name="Raj" role="Product Manager" image="..." />
        <LikeButton/>
      </div>
    </>
  );
}

export default App;
