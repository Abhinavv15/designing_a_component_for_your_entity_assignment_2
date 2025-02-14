// write button card here
import React from "react";

const ViewButton = () => {
    const buttonStyle = {
    backgroundColor: "grey",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "10px",
    };

    return <button style={buttonStyle}>View Product</button>;
};

export default ViewButton;