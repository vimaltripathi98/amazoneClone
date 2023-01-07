import React, { useEffect, useState } from "react";
import Loader from "../Reuseable/Loader";
import Product from "./Product";

const ManCloth = () => {
  const [manCloth, setManCloth] = useState([]);
  const [loader, setLoader] = useState(true);

  const manClothApiCall = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://fakestoreapi.com/products/category/men's clothing",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setLoader(false);
        console.log(result);
        setManCloth(result);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    manClothApiCall();
  }, []);
  return (
    <div className="container">
      {loader ? (
        <Loader />
      ) : (
        <div className="col-md-12">
          <div className="row">
            {manCloth.map((item, index) => {
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

export default ManCloth;
