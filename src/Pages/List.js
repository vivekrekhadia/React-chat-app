import React, { useState } from "react";
import ListItem from "./ListItem";
import "../index.css";

const List = (props) => {
  const [show, setShow] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="text-start active-con" onClick={() => setShow(!show)}>
        <p>{props.title}</p>
        {show ? (
          <i className="bi bi-caret-up-fill"></i>
        ) : (
          <i className="bi bi-caret-down"></i>
        )}
      </div>

      {show && (
        <>
          <div className="container-1">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              name="search"
              onChange={handleChange}
              value={searchInput}
            />
            <button type="submit" className="btn-1">
              <i className="bi bi-search"></i>
            </button>
          </div>
          <div className="name-list">
            <ul>
              {props.names
                .filter((val) => {
                  if (searchInput === "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchInput.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((name, i) => (
                  <ListItem key={i} name={name.name} isActive={name.isActive} />
                ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default List;
