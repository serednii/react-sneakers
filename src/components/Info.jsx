import React from "react";

const Info = ({ title, image, description, setCartOpened }) => {
  console.log("render info");

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src={image} alt="Empty" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="images/arrow.svg" alt="Arrow" />
        Come back
      </button>
    </div>
  );
};

export default Info;
