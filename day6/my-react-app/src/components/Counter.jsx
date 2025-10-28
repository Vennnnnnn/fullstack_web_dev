import { useState } from 'react';
 
 function Counter() {
    // useState is a hook that allows us to have state variables in functional components

    // count variable will react dynamically to changes
    // setCount is the function that updates the count variable
    // anything on right will change what's on the left
   const [count, setCount] = useState(0);
 
   return (
     <div>
       <p>Count: {count}</p>
       <button onClick={() => setCount(count + 1)}>Increase</button>
       <button onClick={() => setCount(count - 1)}>Decrease</button>
     </div>
   );
 }

    export default Counter;