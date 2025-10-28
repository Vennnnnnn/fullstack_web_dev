import {useState, useEffect} from "react";

function Clicker() {
  const [count, setCount] = useState(0);

  // arrow function used for event handler
  const handleClick = () => {
    // alert("You clicked me!");
    setCount(count + 1);
  };

  // 4.5.3 useEffect on Mount Only
  useEffect(() => {
   console.log("Only on first load");
 }, []);

  // useEffect means to run smtg in the background so it doesnt break your UI
  useEffect(() => {
    console.log("on first load");
  });

  // 4.5.4 Respond to State Changes
  useEffect(() => {
    console.log(`Count is now ${count}`);
  }, [count]); // [count] = // dependency array - only trigger based on what you determine to change

  // 4.5.5 Cleanup with useEffect
  useEffect(() => {
   const timer = setInterval(() => {
     console.log("Tick background");
   }, 1000);
 
   return () => clearInterval(timer);
 }, []);

 // if run outside of useEffect, it will not work normally
//  const timer = setInterval(() => {
//      console.log("Tick foreground");
//    }, 1000);

  // dont put handleClick(), the () will make it hang gei
  // putting () means to run it no matter you click or not
  return <button onClick={handleClick}>Click Me</button>;
}

export default Clicker;
