import React, { useRef, useState } from "react";
import "../index.css";

const getNewMessgae = (msg) => {
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return {
    chat: "right",
    text: msg,
    time,
  };
};

const InputField = ({ addMsg }) => {
  // const messageEl = useRef(null);
  const [inputMessage, setinputMessage] = useState("");

  const handleSubmit = () => {
    addMsg(getNewMessgae(inputMessage));
    setinputMessage("");
  };
  return (
    <div
      className="py-3 px-4 border-top"
      style={{ alignItems: "center", position: "relative" }}>
      <div
        className="input-group"
        style={{ alignItems: "center", gap: "10px" }}>
        <div style={{ fontSize: "20px", paddingRight: "7px" }}>
          <i className="bi bi-paperclip"></i>
        </div>

        <input
          type="text"
          className="form-control"
          placeholder="Type your message"
          onChange={(e) => {
            const { value } = e.target;
            setinputMessage(value);
          }}
          value={inputMessage}
        />
        <i
          className="bi bi-emoji-smile"
          style={{
            position: "absolute",
            top: "7px",
            right: "100px",
            zIndex: "1",
          }}></i>

        <button className="btn btn-primary" onClick={handleSubmit}>
          Send <i className="bi bi-send"></i>
        </button>
      </div>
    </div>
  );
};

export default InputField;
