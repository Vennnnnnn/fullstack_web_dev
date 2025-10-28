const fruits = ["Apple", "Banana", "Mango"];
 
function FruitItem({ name }) {
   return <li>{name} </li>;
 }
 
 function FruitList() {
   return (
     <ul>
       {fruits.map((fruit, index) => (
         <FruitItem key={index} name={fruit} />
       ))}
     </ul>
   );
 }


 export default FruitList;