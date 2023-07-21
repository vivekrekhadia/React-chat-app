import React, { useEffect, useRef } from "react";
import ChatLeftRight from "./ChatLeftRight";
import "../index.css";

export const Chats = ({ msgs }) => {
  const bottom = useRef(null);

  useEffect(() => {
    bottom.current.scrollIntoView({ behavior: "auto" });
  }, [msgs]);

  return (
    <div className="position-relative" style={{ flex: "1", minHeight: "0" }}>
      <div className="chat-messages p-4">
        {msgs?.map((chat, id) => (
          <ChatLeftRight
            key={id}
            chat={chat.chat}
            text={chat.text}
            time={chat.time}
          />
        ))}
        <div ref={bottom} />
      </div>
    </div>
  );
};

export default Chats;
