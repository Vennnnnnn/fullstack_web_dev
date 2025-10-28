import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User"
import Profile from "./pages/Profile";
import Welcome from "./pages/Welcome";
import FoodList from "./pages/FoodList";
import Todo from "./pages/ToDo";
 
// https://dummyjson.com/quotes

 function App() {

   return (
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/user/:id" element={<User />} />
       <Route path="/profile/:username" element={<Profile />} />
       <Route path="/welcome" element={<Welcome isLoggedIn={true} />} />
       <Route path="/fruits" element={<FoodList />} />
       <Route path="/todo" element={<Todo />} />
     </Routes>
   );
 }

export default App

