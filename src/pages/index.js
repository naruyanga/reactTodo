// import { useState } from "react";

import { useState } from "react";

// const Page = () => {
//   const [count, setCount] = useState(0);
//   const add = () => {
//     setCount(count + 1);
//   };
//   const minus = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => add()}> add</button>
//       <button onClick={() => minus()}>minus</button>
//     </div>
//   );
// };
// export default Page;
const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState([]);
  const [editTodoId, setEditTodoId] = useState();
  const [editTask, setEditTask] = useState([]);
  const add = () => {
    if (inputValue === "") return;

    const id = Math.floor(Math.random() * 100);
    const newTask = {
      id: id,
      inputValue: inputValue,
      isDone: false,
    };
    setLists([...lists, newTask]);
    setInputValue("");
  };

  const del = (id) => {
    console.log(id);
    const newTask = lists.filter((task) => {
      return task.id !== id;
    });
    setLists(newTask);
  };
  const doneList = (listId) => {
    lists.map((list) => {
      if (list.id === listId) {
        list.isDone = true;
        setLists([...lists]);
      }
    });
  };
  const editTodo = (id) => {
    const newList = lists.map((task) => {
      task.id === id ? { ...task, inputValue: editTask } : task;
    });
    setLists(newList);
  };

  console.log(lists);
  return (
    <div className="container">
      <div>
        <input
          className="input"
          value={inputValue}
          placeholder="Task to be done..."
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={() => add()}>Add</button>
      </div>
      <div className="box">
        {lists.map((todoItem, index) => {
          return (
            <div className="task" key={index}>
              <div>{todoItem.inputValue}</div>
              {/* <div>{todoItem.id}</div> */}
              <div>{todoItem.isDone ? "done" : ""}</div>
              <div>
                <button className="delete" onClick={() => del(todoItem.id)}>
                  Del
                </button>
                <button
                  className="delete"
                  onClick={() => doneList(todoItem.id)}
                >
                  Done
                </button>
                <button
                  className="delete"
                  onClick={() => setEditTodoId(todoItem.id)}
                >
                  Edit
                </button>
                {editTodoId === todoItem.id ? (
                  <div>
                    <input
                      value={editTask}
                      onChange={(e) => setEditTask(e.target.value)}
                    />
                    <button
                      className="delete"
                      onClick={() => editTodo(todoItem.id)}
                    >
                      hhh
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Page;
