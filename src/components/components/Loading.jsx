import React from "react";
import Loader from "../../../assets/images/loader.gif";
import "../../styles/loading.css";

//Loading Component. Would create a full screen overlay with a spinner
export const Loading = () => {
  return (
    <div className="overlay">
      <div className="center">
        <img src={Loader} alt="loading" />
      </div>
    </div>
  );
};
