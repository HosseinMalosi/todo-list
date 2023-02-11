import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import FormField from "../components/FormField";
import ItemCard from "../components/ItemCard";
import _ from "lodash";

const Home = () => {
  const [task, setTask] = useState("");
  const [List, setList] = useState([
    { key: Math.random() * 10, value: "Adding A New Task" },
  ]);

  const fetching = async () => {
    const response = await fetch("http://localhost:8080/api", {
      method: "GET",
    });
    const data =await response.json();
    console.log(data[0].task);
  };

  useEffect(() => {
    fetching();
  }, []);

  const onChangeHandler = (e) => {
    let value = e.target.value;
    setTask(value);
  };

  const onRemoveHandler = (id) => {
    console.log(id);
    const newTasks = List.filter((item) => item.key !== id);
    setList(newTasks);
  };

  const onSubmitHandler = () => {
    event.preventDefault();
    if (task !== "") {
      setList([{ key: Math.random() * 10, value: task }, ...List]);
      toast.success("added successfully", {
        duration: 700,
        position: "top-left",
      });
      setTask("");
    } else {
      toast.error("Add Your Task", {
        duration: 1000,
        position: "top-left",
      });
    }
    console.log(x);
  };

  const taskList =
    List &&
    List.map((item) => (
      <ItemCard
        key={item.key}
        id={item.key}
        task={item.value}
        onRemove={(id) => onRemoveHandler(id)}
      />
    ));

  return (
    <div className="flex flex-col items-center justify-start min-h-screen max-h-full bg-gray-800 gap-3 pt-[5rem] pb-5">
      <form
        className="bg-white px-8 py-4 rounded-md w-96 "
        onSubmit={onSubmitHandler}
      >
        <FormField
          id="todo"
          name="todo"
          label="New Task"
          value={task}
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
      <div className="bg-white w-96 p-5 rounded-md">{taskList}</div>
      <Toaster />
    </div>
  );
};

export default Home;
