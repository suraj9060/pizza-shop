import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "auto",
        fontSize: "40px",
        justifyContent: "center",
      }}
    >
     loading
      <Spinner
        animation="border"
        variant="info"
        style={{
          width: 100,
          height: 100,
          fontSize: 70,
        }}
      />
    </div>
  );
};

export default Loader;
