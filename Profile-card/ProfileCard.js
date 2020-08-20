import React from "react";
import AlertButton from "./AlertButton";

export default ({ title, description, age, nationality, buttonText }) => {
  return (
    <div className="ProfileCard">
      <h1>{title}</h1>
      <p className="description"> {description}</p>
      <span> {age}</span> <span>{nationality}</span><br></br><br></br>
      <AlertButton text={buttonText} />
    </div>
  );
};
