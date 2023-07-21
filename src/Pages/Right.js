import React, { useEffect, useState } from "react";
import "../index.css";
import Chats from "./Chats";
import HeaderCard from "./HeaderCard";
import InputField from "./InputField";

const chatObj = [
  {
    chat: "right",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "10:00 AM",
  },
  {
    chat: "left",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "10:00 AM",
  },
  {
    chat: "right",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "10:00 AM",
  },
  {
    chat: "left",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "10:00 AM",
  },
  {
    chat: "right",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "10:00 AM",
  },
  {
    chat: "left",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "10:00 AM",
  },
  {
    chat: "right",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "10:00 AM",
  },
  {
    chat: "left",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "10:00 AM",
  },
];
const getChatValue = JSON.parse(localStorage.getItem("chat"));

const Right = () => {
  const [first, setfirst] = useState([]);

  useEffect(() => {
    if (getChatValue === null) {
      setfirst([]);
    } else {
      setfirst(getChatValue);
    }
  }, []);

  useEffect(() => {
    if (first === null) {
      localStorage.setItem("chat", JSON.stringify([]));
    } else {
      localStorage.setItem("chat", JSON.stringify(first));
    }
  }, [first]);
  console.log(first);
  return (
    <div className="right">
      <HeaderCard />
      <Chats msgs={first} />
      <InputField
        addMsg={(msg) => {
          setfirst((prev) => [...prev, msg]);
        }}
      />
    </div>
  );
};

export default Right;
