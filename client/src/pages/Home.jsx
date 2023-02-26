import React, { useEffect, useState} from "react";
import toast, { Toaster } from "react-hot-toast";
import FormField from "../components/FormField";
import ItemCard from "../components/ItemCard";
import { deleteHandler, fetching, sendData } from "../utils";

const Home = () => {
  const [task, setTask] = useState("");
  const [List, setList] = useState([]);

  const onChangeHandler = (e) => {
    let value = e.target.value;
    setTask(value);
  };

  const onRemoveHandler = async (id) => {
    deleteHandler(id);
  };

  const onSubmitHandler = () => {
    event.preventDefault();

    if (task !== "") {
      sendData(task);
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
  };

  useEffect(() => {
    const data = fetching();
    data.then((data) => {
      setList(data);
    });
  }, [onRemoveHandler, onChangeHandler, fetching]);

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
      <div className="bg-white w-96 p-5 rounded-md">
        {(List.length > 0 &&
          List.map((item) => (
            <ItemCard
              key={item._id}
              id={item._id}
              task={item.task}
              onRemove={(id) => onRemoveHandler(id)}
              checked={item.checked}
            />
          ))) || <h1>Your List Is Empty</h1>}
      </div>
      <Toaster />
    </div>
  );
};

export default Home;
