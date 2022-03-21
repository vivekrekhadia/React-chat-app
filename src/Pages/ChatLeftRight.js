import "../index.css";

import ImageActive from "./ImageActive";

const ChatLeftRight = (props) => {
  return (
    <>
      {props.chat === "right" ? (
        <div className="chat-message-right pb-4">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "end",
              padding: "0 10px",
              maxWidth: "680px",
            }}>
            <div
              className=" d-flex py-3 chat-right"
              style={{ wordWrap: "break-word", maxWidth: "100%" }}>
              {props.text}
            </div>
            <div className="text-muted small text-nowrap mt-2">
              {props.time}
            </div>
          </div>
          <ImageActive width="40px" height="40px" logged_in="loged_in" />
        </div>
      ) : (
        <div className="chat-message-left pb-4">
          <ImageActive width="40px" height="40px" logged_in="loged_in" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "end",
              padding: "0 10px",
            }}>
            <div className="flex-shrink-1 bg-light d-flex py-3 chat-left">
              {props.text}
            </div>
            <div className="text-muted small text-nowrap mt-2 text-start">
              {props.time}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatLeftRight;
