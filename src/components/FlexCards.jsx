import React, { useState, useRef } from "react";
import StartingCard from "./shared/StartingCard";

const FlexCards = ({ cards, firstCard, position }) => {
  const [cardPosition, setcardPosition] = useState(1);


  const Previous = () => {
    setcardPosition(1)

    const element = document.getElementById(`card${position}0`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }


  }
  const Next = () => {
    setcardPosition(6)
    const element = document.getElementById(`card${position}${cards.length - 1}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }



  return (
    <div className={`  shadow-lg flex  overflow-x-auto bg-white `}>



      <StartingCard
        image={firstCard.image}
        title={firstCard.title}
        btnlabel={firstCard.btnlabel}
      />

      {/* products */}

      <div class="relative flex  w-10/12 ">
        {cardPosition === 6 && <span onClick={Previous} className="cursor-pointer absolute h-24  left-0 bg-white rounded-tr-lg rounded-br-lg py-8 flex items-center  top-0 bottom-0 m-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] px-2 border text-4xl font-bold ">
          {"<"}
        </span>}
        <div className="flex  overflow-x-auto hide-scrollbar">
          {React.Children.toArray(
            cards.map((item, index) => {
              return (
                <div id={`card${position}${index}`} class="flex-col items-center justify-center gap-y-4 flex  flex-shrink-0 w-[232px] h-[342px] p-4  bg-white ">
                  <div className=" h-[160px] w-[206px] my-2">
                    <img
                      src={item?.image}
                      className="h-full m-auto"
                      alt="prod_img"
                    />
                  </div>

                  <p className="text-sm font-medium text-center">{item?.title}</p>
                  <p className="font-medium text-center text-green-600">
                    {item?.price}
                  </p>
                  <p className="text-center text-gray-800 ">{item?.subtitle}</p>
                </div>
              );
            })
          )}
        </div>
        {cardPosition === 1 && <span onClick={Next} className="h-24 absolute top-0 cursor-pointer bottom-0  m-auto right-0 bg-white rounded-tl-lg rounded-bl-lg py-8 flex items-center  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] px-2 border text-4xl font-bold ">
          {">"}
        </span>}
      </div>



    </div>
  );
};

export default FlexCards;
