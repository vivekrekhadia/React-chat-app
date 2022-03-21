import React, { useContext } from "react";
import Context from "../Context/Context";
import pic from "../pic.png";

const ImageActive = ({ width, height, logged_in }) => {
  const b = useContext(Context);
  return (
    <div className="avatar">
      <div style={{ position: "relative" }}>
        <img
          src={pic}
          className="rounded-circle"
          style={{ width, height }}
          alt=""
        />
        {b.active ? <span className={logged_in}>●</span> : null}
      </div>
    </div>
  );
};

export default ImageActive;
