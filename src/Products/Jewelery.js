import React, { useEffect, useState } from "react";
import Loader from "../Reuseable/Loader";
import Product from "./Product";

const Jewelery = () => {
  const [jewelery, setJewelery] = useState([]);
  const [loader, setLoader] = useState(true);

  const jeweleryApiCall = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://fakestoreapi.com/products/category/jewelery", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoader(false);
        setJewelery(result);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    jeweleryApiCall();
  }, []);
  return (
    <div className="container">
      {loader ? (
        <Loader />
      ) : (
        <div className="col-md-12">
          <div className="row">
            {jewelery.map((item, index) => {
              const { id, title, price, image, rating } = item;
              const { rate } = rating;
              return (
                <div className="col-md-4 mb-4">
                  <Product
                    id={id}
                    title={title}
                    price={price}
                    image={image}
                    rating={rate}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Jewelery;
