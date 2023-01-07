import React, { useState, useEffect } from "react";
import Product from "../Products/Product";
import "./Home.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loader from "../Reuseable/Loader";

const Home = () => {
  const [state, setState] = useState([]);

  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);

  const PageSize = 10;
  const lastPageIndex = PageSize * page;
  const firstPageIndex = lastPageIndex - PageSize;
  let data = state.slice(firstPageIndex, lastPageIndex);

  const apiCheck = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://fakestoreapi.com/products", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoader(false);
        console.log(result, "res");
        setState(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    apiCheck();
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
          alt=""
          className="home__image"
        />
        {loader ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            <div className="col-md-12">
              <div className="row">
                {data.map((item, index) => {
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
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                margin: "20px 0  10px 0",
              }}
              className="col-md-12"
            >
              <Stack>
                <Pagination
                  count={Math.ceil(state?.length / PageSize)}
                  color="secondary"
                  onChange={(e, value) => {
                    setPage(value);
                  }}
                />
              </Stack>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
