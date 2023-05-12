import React from "react";

const Categories = () => {
  const cats = [
    {
      img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/1350e22cff9663e7.png?q=100",
      title: "Top Offers",
    },
    {
      img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d64cae0f8081256a.png?q=100",
      title: "Mobiles & Tablets",
    },
    {
      img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7dbcda527b648814.png?q=100",
      title: "Electronics",
    },
    {
      img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e29a070388d534a5.png?q=100",
      title: "TV & Appliances",
    },
    {
      img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d44ffc537ed6e241.png?q=100",
      title: "Fashion",
    },
    {
      img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/994a83c90019fb5f.png?q=100",
      title: "Beauty",
    },
    {
      img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d300931a0fd1c17e.png?q=100",
      title: "Home & Furniture",
    },
    {
      img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/2dac2decff60c650.png?q=100",
      title: "Future",
    },
    {
      img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/aecfaba5969b96dd.png?q=100",
      title: "Grocery",
    },
  ];

  return (
    <div className="flex items-center justify-between py-4 mb-2 bg-white shadow-xl  px-44">
      {cats.map((cat) => {
        return (
          <div className="flex flex-col items-center justify-center ">
            <img className="w-16" src={cat?.img} alt="cat image" />
            <p className="text-[15px] font-medium">{cat?.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
