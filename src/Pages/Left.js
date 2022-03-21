import React, { useContext } from "react";
import "../index.css";

import ImageActive from "./ImageActive";
import NameList from "./NameList";

import Context from "../Context/Context";
const Left = () => {
  const a = useContext(Context);
  const handleChange = () => {
    a.setActive(!a.active);
  };
  console.log(a.active);
  return (
    <div className="left">
      <div className="topper">
        <h2>
          <i className="bi bi-apple" style={{ color: "#0a4cf3" }}></i>
          &nbsp;Quickchat
        </h2>
      </div>
      <div className="card m-3" style={{ backgroundColor: "#f5f8fd" }}>
        <div className="imgcover">
          <ImageActive height="70px" width="70px" logged_in="logged_in" />
        </div>
        <div className="card-body">
          <h4 className="text-center">
            Vivek Rekhadia
            <i
              className="bi bi-gear"
              style={{ fontSize: "20px", marginLeft: "5px" }}></i>
          </h4>
          <p className="card-text text-center">Lead React Developer</p>
          <div className="form-check form-switch justify-content-center d-flex">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked={a.active}
              onChange={handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked">
              Active
            </label>
          </div>
        </div>
      </div>
      <NameList />
    </div>
  );
};

export default Left;
