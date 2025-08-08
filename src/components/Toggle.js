import React from "react";
import { useState, useEffect } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((prev) => !prev);
  }

  const color = isOn ? "red" : "white";

  // Change body background whenever `isOn` changes
  useEffect(() => {
    document.body.style.backgroundColor = isOn ? "orange" : "darkgrey";
  }, [isOn]);

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;