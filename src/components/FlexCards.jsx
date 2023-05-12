import React from "react";
import StartingCard from "./shared/StartingCard";

const FlexCards = () => {
  const kidsProdcts = [
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/l58iaa80/electric-cycle/i/y/f/-original-imagfykthgudy4qz.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },

    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/jk1grrk0/car-pressure-washer/j/c/m/06008a7af0-bosch-original-imaf7hd6bv8g3m6r.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/kqgyhe80/stroller-pram/m/g/r/easy-to-push-baby-pram-with-quick-one-hand-folding-blue-mm-50-a-original-imag4h6bzrb6fngh.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },

    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/jc0ttow0/vehicle-lubricant/5/h/q/1-3000-4t-plus-20w40-hc-tech-engine-oil-for-bikes-motul-original-imaff8z4xtq5ry6a.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
  ];
  return (
    <div className="flex overflow-x-auto bg-white ">
      <StartingCard
        image="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90"
        title="Beauty, Food, Toys & more"
        btnlabel="VIEW ALL"
      />

      {/* products */}
      <div class="flex w-10/12 overflow-x-auto hide-scrollbar ">
        {React.Children.toArray(
          kidsProdcts.map((item) => {
            return (
              <div class="flex-col items-center justify-center gap-y-4 flex  flex-shrink-0 w-[232px] h-[342px] p-4 m-2 bg-white ">
                <div className=" h-[208px] w-[206px]">
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
    </div>
  );
};

export default FlexCards;
