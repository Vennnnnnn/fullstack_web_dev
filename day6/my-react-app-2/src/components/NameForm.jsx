import { useState } from "react";
 
function NameForm() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
 
   return (
     <div>
       <input
         type="text"
         placeholder="Enter name"
         value={name}
         // removing the e in (e) it will also work, just that the placeholder will not have the value when it starts
         onChange={(e) => setName(e.target.value)}
       />
       <input
         type="email"
         placeholder="Enter email"
         value={email}
         // removing the e in (e) it will also work, just that the placeholder will not have the value when it starts
         onChange={(e) => setEmail(e.target.value)}
       />
       <p>Name: {name}</p>
       <p>Email: {email}</p>
     </div>
   );
 }

 export default NameForm