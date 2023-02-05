import React from "react";
import { CheckCircleIcon as Check } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const ItemCard = ({ task }) => {
  const onClickHandler = () => {
    document.querySelector(".check")
  };

  return (
    <div
      className="flex justify-start p-3 border border-gray-300 rounded gap-4 relative"
      onClick={onClickHandler}
    >
      <p>do the job</p>
      <Check className=" absolute right-1 top-3 w-6 check" />
    </div>
  );
};

export default ItemCard;
