import React, { useState } from "react";
import FormField from "../components/FormField";
import ItemCard from "../components/ItemCard";

const Home = () => {
  const [task, setTask] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-gray-800 gap-3 ">
      <form className="bg-white px-8 py-4 rounded-md w-96 mt-[-10rem]">
        <FormField id="todo" name="todo" label="New Task" value={task} />
        <button
          type="submit"
          className=" text-sm font-semibold bg-green-400 p-1.5 rounded-lg"
        >
          Add To The List
        </button>
      </form>
      <div className="bg-white w-96 p-5 rounded-md">
        <ItemCard />
      </div>
    </div>
  );
};

export default Home;
