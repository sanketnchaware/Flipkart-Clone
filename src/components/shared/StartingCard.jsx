import React from "react";
import { Link } from "react-router-dom";

const StartingCard = ({ image, title, btnlabel, link, handlebtn }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`w-2/12 flex flex-col items-center h-[342px] bg-no-repeat bg-bottom p-8 pt-16 gap-8`}
    >
      <p className="text-3xl text-center">{title}</p>

      {link ? (
        <Link
          to={link}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          {btnlabel}
        </Link>
      ) : (
        <button
          onClick={handlebtn}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          {btnlabel}
        </button>
      )}
    </div>
  );
};

export default StartingCard;
