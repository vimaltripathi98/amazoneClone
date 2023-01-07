import React, { useEffect, useState } from "react";
import Loader from "../Reuseable/Loader";
import Product from "./Product";

const WomenCloth = () => {
  const [womenCloth, setWomenCloth] = useState([]);
  const [loader, setLoader] = useState(true);

  const womenClothApiCall = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://fakestoreapi.com/products/category/women's clothing",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setLoader(false);
        console.log(result);
        setWomenCloth(result);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    womenClothApiCall();
  });
  return (
    <div className="container">
      {loader ? (
        <Loader />
      ) : (
        <div className="col-md-12">
          <div className="row">
            {womenCloth.map((item, index) => {
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

export default WomenCloth;
