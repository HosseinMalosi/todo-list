import React, { useRef } from "react";
import {motion} from "framer-motion";
import {
  CheckCircleIcon as Check,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const ItemCard = ({ task, onRemove, id }) => {
  const ref = useRef();

  const onClickHandler = (e) => {
    const div = ref.current;
    const paragragh = ref.current.childNodes[0];
    const unCheck = ref.current.childNodes[1];
    const Checked = ref.current.childNodes[2];
    unCheck.classList.toggle("hidden");
    Checked.classList.toggle("hidden");
    paragragh.classList.toggle("line-through");
    paragragh.classList.toggle("text-gray-400");
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
      <p >{task}</p>
      <Check
        className=" absolute right-1 top-3 w-6 uncheck cursor-pointer"
        onClick={(e) => onClickHandler(e)}
      />
      <CheckCircleIcon
        className=" absolute right-1 top-3 w-6 checked hidden cursor-pointer"
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
