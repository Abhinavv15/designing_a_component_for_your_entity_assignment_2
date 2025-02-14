// write product card here
import React from "react";
import ViewButton from "./button";

const Productcard = () => {
    const productImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAPkJr-A83pgKDpNBrRatIXniBLXptZhmZQ&s";
    const productName = "iPhone 16 Pro";
    const price = "$1500";

    const cardStyle = {
    border: "2px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    width: "200px"
    };

    const imgStyle = {
    width: "100px",
    height: "100px",
    marginBottom: "10px",
    };

    return (
    <div style={cardStyle}>
        <img src={productImage} alt="product" style={imgStyle} />
        <h3>{productName}</h3>
        <p>{price}</p>
        <ViewButton />
        </div>
    );
};

export default Productcard;
