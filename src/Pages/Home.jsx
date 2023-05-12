import React from "react";
import HeroSwiper from "../components/HeroSwiper";
import Categories from "../components/Categories";
import sbioffer from "../assets/sbiAdd.png";
import FlexCards from "../components/FlexCards";
const Home = () => {
  const firstKidsCard = {
    image: "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90",
    title: "Beauty, Food, Toys & more"
    , btnlabel: "VIEW ALL"
  };

  const firstBestSeller = {
    image: "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/d5408faca4201222.jpg?q=90",
    title: "Fasion Best Sellers", btnlabel: "VIEW ALL",
  }
  const firstTravel = {
    image: "",
    title: "Vacay Travel Essentials", btnlabel: "VIEW ALL",
  }
  const firsttopDeals = {
    image: "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/86e6d52663901503.jpg?q=90",
    title: "Top Deals", btnlabel: "VIEW ALL",
  }



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

  const travelProds = [
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/xif0q/shoe/t/6/w/9-vs-9500-9-world-wear-footwear-white-original-imagn6a5fqbncryj.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/xif0q/slipper-flip-flop/g/f/0/-original-imaghugu7dfeyf7d.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/l5h2xe80/shirt/7/s/h/xs-juhg-try-this-original-imagg4wyccyjm3jf.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/xif0q/cap/k/a/u/free-new-fashion-speqta-original-imaggbugymfewgtg.jpeg?q=70",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/xif0q/sandal/o/b/h/-original-imaggcb4ezywqmvu.jpeg?q=70",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },

    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/kdlzte80/lock/u/y/q/resettable-combination-4-digit-number-travel-luggage-password-original-imafugz8qvgcbhqk.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/xif0q/track-pant/k/b/i/xl-tr12-vebnor-original-imaggn4rfyudc4gh.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/xif0q/backpack/c/i/v/-original-imagh3w8tpdmzegb.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/xif0q/toothpaste/i/x/d/-original-imagzcqzadfaybfx.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },

    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/kjem3rk0-0/bandana/a/d/d/12-regular-neck-gaiter-headband-boyhood-70-original-imafyzhhcezx7zhb.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
  ];
  const BestSellerprods = [
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/xif0q/bra/1/7/e/lightly-padded-34e-regular-no-regular-br1804x01-clovia-original-imagg9ja3fadhyfh.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/200/200/image/dca97fb4b0c593f8.jpg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/xif0q/sari/8/6/w/free-sknt17-d-divastri-unstitched-original-imagg9j9vvv8s3hb.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/xif0q/dress/j/s/f/s-kbt-559-krati-by-tara-original-imagg9hftvfxe56u.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/klo27bk0/churidar/n/x/k/xxl-women-churidar-nakaash-original-imagyqy6evhh7xzc.jpeg?q=70",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },

    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/kuef2q80/kurta/h/n/y/s-dafksp20pi21aqua-max-original-imag7j8gnghzahsu.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/kh2b4i80-0/kurta/o/j/5/4xl-vfku162-vbuyz-original-imafx5vax2ucaygy.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/w/0/e/m-rzw01cowprint-rodzen-original-imagmptn3jy2mqm9.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/bra/e/f/o/non-padded-32b-1-regular-no-transparent-back-zi11fm-baltic-original-imagg5h3vc49gguh.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },

    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/xif0q/track-pant/v/c/r/5xl-tbljogj36-chbljogj34-tripr-original-imagmenpc9b2snhg.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
  ];
  const TopDealsprods = [
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/kgqvlow0/battery-charger/d/a/7/apple-mhjd3hn-a-original-imafwwwfg5xgcctm.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/j6tn53k0/instant-camera/d/j/r/lime-green-mini-9-mini-9-fujifilm-original-imaex6qtwau9yfwy.jpeg?q=70",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/xif0q/stylus/6/t/u/pencil-1st-generation-mqly3zm-a-apple-original-imagj85yqajmxu9j.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/kq18n0w0/tablet/p/f/u/za5g0176in-lenovo-original-imag4525frzw2qa7.jpeg?q=70",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },

    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/kpvivm80/tablet/r/x/9/sm-t225nzaains-samsung-original-imag4yrg8vahczvr.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/k0bbb0w0/data-cable/usb-type-c-cable/u/t/w/flipkart-smartbuy-acrbb1m01-original-imafk4vq3kedyxku.jpeg?q=70",
      title: "Top Selling Stationary",
      price: "From ₹ 49",
      subtitle: "Pens, Nodebooks & More",
    },

  ];


  return (
    <div className="h-screen ">
      <Categories />
      <div className="px-2">
        <HeroSwiper />
        <img src={sbioffer} className="m-auto my-4 shadow-md " alt="sbioffer" />
        {/* <FlexCards position="topdeal" firstCard={firsttopDeals} cards={TopDealsprods} /> */}
        {/* <br />
        <FlexCards position="kids" firstCard={firstKidsCard} cards={kidsProdcts} />
        <br /> */}
        <FlexCards position="fashion" firstCard={firstBestSeller} cards={BestSellerprods} />
        <br />
        <FlexCards position="travel" firstCard={firstTravel} cards={travelProds} />
      </div>
    </div>
  );
};

export default Home;
