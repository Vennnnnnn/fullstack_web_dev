const todos = ["Sweep", "Mop", "Polish"];

function Todo() {
  return (
    <>
      <ul>
        {todos.length > 0 &&
          todos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </>
  );
}

export default Todo;
