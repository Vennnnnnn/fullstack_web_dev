import {useState} from "react";
import Navbar from "../components/NavBar"

function Home() {
  const userName = "Alice";
  const isLoggedIn = true;

  return (
    <div className="container">
      <h1>Hello, {userName}!</h1>
      {isLoggedIn ? (
        <p>Welcome back to your dashboard.</p>
      ) : (
        <button onClick={() => alert("Please log in!")}>Log In</button>
      )}
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

export default Home;
