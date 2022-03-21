import React from "react";
import pic from "../pic.png";
import "../index.css";

const ListItem = (props) => {
  return (
    <li className="n-list">
      <div className="friend">
        <div className="img_name">
          <div className="avatar">
            <img src={pic} alt="" className="ava" />
            {props.isActive ? <span className="logg-in">●</span> : null}
          </div>
          <div className="name">{props.name}</div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
