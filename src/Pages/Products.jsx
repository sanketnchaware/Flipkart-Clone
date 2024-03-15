import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import swal from "sweetalert";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  console.log("cart:", cart);

  const getProducts = async () => {
    setLoading(true);
    await axios
      .get(`http://localhost:5000/products?page=${page}`)
      .then((response) => {
        console.log("response:", response);
        setLoading(false);
        const { data } = response.data;
        setProducts(data);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error:", error);
      });
  };

  const AddtoCart = (prod) => {
    const index = cart.findIndex((item) => item.id === prod._id);
    console.log("index:", index);

    const carttotset = [...cart];

    if (index !== -1) {
      carttotset[index].quantity++;
      setCart(carttotset);
    } else {
      setCart([
        ...cart,
        {
          id: prod._id,
          image: prod.image,
          name: prod.name,
          price: prod.price,
          quantity: 1,
        },
      ]);
    }

    swal("Product Added to the Cart");
  };

  useEffect(() => {
    if (page > 0) getProducts();
  }, [page]);

  useMemo(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <h1 className="p-4 text-2xl font-bold underline">All Products</h1>

      {loading ? (
        <p className="text-4xl text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 gap-4  sm:grid-cols-4">
          {products?.map((item) => {
            return (
              <div className="flex flex-col gap-4 p-4 border-2 border-teal-700  rounded-xl">
                <p className="text-2xl ">{item.name}</p>
                <p className="text-2xl ">Rating:- {item.rating}</p>
                <img
                  className="w-full  h-44"
                  src={item.image}
                  alt="prod_photo"
                />
                <div className="flex justify-between gap-4">
                  <p className="text-2xl ">₹ {item.price}</p>
                  <button
                    onClick={() => {
                      AddtoCart(item);
                    }}
                    className="px-4 py-2 bg-blue-400 rounded-lg active:bg-blue-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex m-auto my-8 text-2xl bg-blue-400 justify-evenly w-44">
        <button
          onClick={() => {
            page > 1 && setPage(page - 1);
          }}
        >
          Prev
        </button>
        <p>{page}</p>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
