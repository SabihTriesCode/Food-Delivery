import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a wide variety of delicious dishes, freshly prepared with
          quality ingredients. Explore our menu, discover new favourites, and
          enjoy delicious meals delivered straight to your doorstep, anytime
          you’re craving something special.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
