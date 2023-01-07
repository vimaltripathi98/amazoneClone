import React, { useEffect, useState } from "react";
import Loader from "../Reuseable/Loader";
import Product from "./Product";

const Electronics = () => {
  const [electronic, setElectronic] = useState([]);
  const [loader, setLoader] = useState(true);

  const electronicApiCall = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://fakestoreapi.com/products/category/electronics",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setLoader(false);
        console.log(result);
        setElectronic(result);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    electronicApiCall();
  });
  return (
    <div className="container">
      <div></div>
      {loader ? (
        <Loader />
      ) : (
        <div className="col-md-12">
          <div className="row">
            {electronic.map((item, index) => {
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

export default Electronics;
