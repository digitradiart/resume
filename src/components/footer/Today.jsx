import React from "react";
import "./footer.css";

export default function Today() {
  const current = new Date();
  const date = `${current.getDate()} - ${
    current.getMonth() + 1
  } - ${current.getFullYear()}`;

  return (
    <div className="App">
      <h5>{date}</h5>
    </div>
  );
}
