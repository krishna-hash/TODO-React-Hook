import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function App() {
  const [newtodo, settodo] = useState("");
  const [list, setlist] = useState([]);
  const update = (e) => {
    e.preventDefault();
    settodo(e.target.value);
  };
  function additem(e) {
    e.preventDefault();
    if (newtodo === "") return;
    setlist([...list, { id: 1 + Math.random(), text: newtodo }]);
    settodo("");
  }
  const resets = (id) => {
    setlist(list.filter((todos) => todos.id !== id));
  };

  return (
    <div className="App">
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>TODO -LIST</h1>
        <br></br>
        <div className="content">
          <input
            type="text"
            id="input"
            onChange={update}
            value={newtodo}
            placeholder="type here...."
          ></input>
          <button id="button" onClick={additem}>
            ADD
          </button>
          <br></br>
          <ul>
            {list.map((todo) => (
              <li key={todo.key}>
                <h1>
                  <input type="checkbox" id="check"></input>
                  <span id="text">{todo.text}</span>
                  <button id="button1" onClick={() => resets(todo.id)}>
                    <FaRegTrashAlt color="black" size="20px"></FaRegTrashAlt>
                  </button>
                </h1>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
