import React, { useState } from "react";
import "../index.css";
import ListItem from "./ListItem";
import List from "./List";
const names = [
  {
    isActive: true,
    name: "Henry Boyd",
  },
  {
    isActive: true,
    name: "Martha Curtis",
  },
  {
    isActive: true,
    name: "phillip Tucker",
  },
  {
    name: "christine Ried",
  },
  {
    name: "Jerry Lol",
  },
  {
    name: "Russel Andre",
  },
  {
    name: "Mark Henry",
  },
  {
    name: "Vivek Rekhadia",
  },
  {
    name: "Vivek Rekhadia",
  },
];
const NameList = () => {
  return (
    <>
      <List title="Active Conversation" names={names} />
      <List title="Archived Conversation" names={names} />
    </>
  );
};

export default NameList;
