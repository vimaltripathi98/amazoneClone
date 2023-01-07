import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import Cookies from "universal-cookie";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  let navigate = useNavigate();
  const handleClick = (key) => {
    if (key == "checkout") {
      navigate("/checkout");
    } else {
      navigate("/");
    }
  };

  const cookies = new Cookies();

  const handleChangeSignIn = () => {
    cookies.remove("x-auth-token", "vimal");
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="header__logo" onClick={() => handleClick("store")}>
        <StorefrontIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle">vShop</h2>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div>
        <ul className="nav_div">
          <li>
            <a className="decoration nav__itemLineTwo" href="/electronic">
              electronics
            </a>
          </li>
          <li>
            <a href="/jewelery" className="decoration nav__itemLineTwo">
              Jewelery
            </a>
          </li>
          <li>
            <a href="/manCloth" className="decoration nav__itemLineTwo">
              men's clothing
            </a>
          </li>
          <li>
            <a href="/womenCloth" className="decoration nav__itemLineTwo">
              women's clothing
            </a>
          </li>
        </ul>
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo" onClick={handleChangeSignIn}>
            Sign Out
          </span>
        </div>
        {/* <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div> */}
        <div className="nav__itemBasket">
          <ShoppingBasketIcon onClick={() => handleClick("checkout")} />
          <span className="nav__itemLineTwo nav__basketCount">
            {basket.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
