import React from "react";
import pic from "../pic.png";
import "../index.css";

const HeaderCard = () => {
  return (
    <div>
      <div className="py-2 px-4 border-bottom d-flex align-items-center">
        <div className="position-relative">
          <img
            src={pic}
            className="rounded-circle me-1"
            width="40"
            height="40"
            alt=""
          />
        </div>
        <div className="flex-grow-1 ps-3">
          <strong>Henry Boyd</strong>
          <div className="text-muted small">
            <em>Online</em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
