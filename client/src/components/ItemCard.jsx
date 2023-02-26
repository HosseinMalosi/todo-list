import React, { useRef, useState } from "react";
import {motion} from "framer-motion";
import {
  CheckCircleIcon as Check,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Update } from "../utils";

const ItemCard = ({ task, onRemove, id , checked}) => {
  const [Checked , setChecked] = useState(checked)
  const ref = useRef();

  const onClickHandler = (e) => {
    if(Checked === false) setChecked(true)
    else setChecked(false)
    Update(Checked,"update",id)
  };

  return (
    <motion.div
      className="flex justify-start p-3 border border-gray-300 rounded gap-4 relative mb-2"
      ref={ref}
      id={id}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        ease: [0.2, 0.71, 0.2, 1.01],
      }}
    >
      <p className={Checked ? " line-through text-gray-400" : ""}>{task}</p>
      <Check
        className={` absolute right-1 top-3 w-6 uncheck cursor-pointer ${Checked ? "hidden" : ""}`}
        onClick={(e) => onClickHandler(e)}
      />
      <CheckCircleIcon
        className={`absolute right-1 top-3 w-6 checked ${!Checked ? "hidden" : ""} cursor-pointer`}
        onClick={(e) => onClickHandler(e)}
      />
      <TrashIcon
        className=" absolute right-10 top-3 w-6 hover:text-red-700 cursor-pointer"
        onClick={() => onRemove(id)}
      />
    </motion.div>
  );
};

export default ItemCard;
