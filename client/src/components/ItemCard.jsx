import React from "react";
import {
  CheckCircleIcon as Check,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const ItemCard = ({ task, onRemove, key }) => {
  const onClickHandler = () => {
    const unCheck = document.querySelectorAll(".uncheck")[0];
    const Checked = document.querySelectorAll(".checked");
    console.log(Checked.length);
  };
  return (
    <div
      className="flex justify-start p-3 border border-gray-300 rounded gap-4 relative mb-2"
      onClick={onClickHandler}
      key={key}
    >
      <p>{task}</p>
      <Check className=" absolute right-1 top-3 w-6 uncheck" />
      <CheckCircleIcon className=" absolute right-1 top-3 w-6 checked hidden" />
      <TrashIcon
        className=" absolute right-10 top-3 w-6 hover:text-red-700 cursor-pointer"
        onClick={onRemove}
      />
    </div>
  );
};

export default ItemCard;
