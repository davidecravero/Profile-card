import React from "react";

export default ({ text }) => {
  return (
    <button className="alertButton" onClick={() => alert(text)}>
      {text}
    </button>
  );
};
