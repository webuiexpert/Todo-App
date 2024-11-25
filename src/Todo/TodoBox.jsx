import React, { useState } from "react";

function TodoBox() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [mainTask, setMainTask] = useState([]);
  const [checkInput, setCheckInput] = useState(false);

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, description }]);
    setCheckInput(e.checked)
    setTitle("");
    setDescription("");
  };

  const deleteHandler = (index) => {
    let copyTask = ([...mainTask]);
    copyTask.splice(index, 1);
    setMainTask(copyTask);
  };


  let renderItem = <h1>No task Here</h1>;

  if(mainTask.length > 0)
  {
    renderItem = mainTask.map((item, index) => {
        return (
          <div key={index} className="flex justify-between">
            <div className="ItemLists flex justify-between w-2/3 bg-red-300 py-1 px-3 mb-3 gap-3">
              {" "}
              <h2 className="text-md font-semibold capitalize tracking-widest">{item.title}</h2>
              <h4 className="text-sm capitalize tracking-wide">{item.description}</h4>
            </div>
            <div className="deleteBtn flex justify-between items-center gap-3 min-w-[10%]">
           <input onChange={(e) =>{
                setCheckInput(e.target.checked)
              }} type="checkbox" name="" id="checkItem" /> <span className="border border-white rounded-lg text-white px-3 py-1 bg-green-500">Done</span>
              <button
                onClick={(index) => {
                  deleteHandler(index);
                }}
                className="border border-white rounded-lg text-white px-3 py-1 bg-red-500"
              >
                Delete
              </button>
              
            </div>
          </div>
        );
      });
  }

 

  return (
    <div className="border-dashed border-black/30 rounded-md border-2 max-w-7xl mx-auto lg:p-10 p-3">
      <h1 className="text-4xl font-semibold text-start lg:mb-16 mb-6">Todo List</h1>
      <form onSubmit={submitHandler}>
        <div className="inputbox flex  justify-between items-center gap-2 mb-3">
          <input
            onChange={titleChange}
            className="border px-4 py-3 rounded-sm w-[40%]"
            type="text"
            placeholder="Enter your task"
            value={title}
          />
          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="border px-4 py-3 rounded-sm w-[40%]"
            type="text"
            placeholder="Enter your description"
            value={description}
          />
          <button
            className="border px-4 py-1 text-lg bg-black text-white rounded-lg"
            type="submit"
          >
            Add Task
          </button>
        </div>
      </form>
      <div className="w-full h-[1px] bg-black my-20"></div>
      <div className="taskContainer">
        <ul>{renderItem}</ul>
      </div>
    </div>
  );
}

export default TodoBox;
