import React, { useState } from "react";
import FormField from "../components/FormField";
import ItemCard from "../components/ItemCard";

const tasks = [{ key: Math.random() * 10, value: "Adding A New Task" }];

const Home = () => {
  const [task, setTask] = useState({key:'' , value:''});

  const onChangeHandler = (e) => {
    let value = e.target.value;
    setTask({ key:Math.random() * 10 ,value: value });
  };

  const onRemoveHandler = () => {
    console.log("task removed");
  };

  const onSubmitHandler = () => {
    event.preventDefault();
    tasks.push(task);
    setTask({key:"" , value:''});
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-gray-800 gap-3 ">
      <form
        className="bg-white px-8 py-4 rounded-md w-96 mt-[-10rem]"
        onSubmit={onSubmitHandler}
      >
        <FormField
          id="todo"
          name="todo"
          label="New Task"
          value={task.value}
          onChange={(e) => onChangeHandler(e)}
          placeholder="doing something..."
        />
        <button
          type="submit"
          className=" text-sm font-semibold bg-green-400 p-1.5 rounded-lg"
        >
          Add To The List
        </button>
      </form>
      <div className="bg-white w-96 p-5 rounded-md">
        {tasks &&
          tasks.map((item) => (
            <ItemCard key={item.key} task={item.value} onRemove={onRemoveHandler} />
          ))}
      </div>
    </div>
  );
};

export default Home;
