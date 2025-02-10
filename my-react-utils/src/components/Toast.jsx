import React, { useState } from "react";
export const Toast = ({ message }) => {
  const [visible, setVisible] = useState(true);
  return visible ? <div className="toast">{message}</div> : null;
};
