import React from "react";

const Tooltip = ({ children, text, customClassName }) => {
  return (
    <div data-tooltip={text} className={`tooltip ${customClassName || ""}`}>
      {children}
    </div>
  );
};

export default Tooltip;
