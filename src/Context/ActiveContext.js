import { useState } from "react";
import Context from "./Context";

const ActiveContext = (props) => {
  const [active, setActive] = useState(false);

  return (
    <Context.Provider value={{ active, setActive }}>
      {props.children}
    </Context.Provider>
  );
};

export default ActiveContext;
