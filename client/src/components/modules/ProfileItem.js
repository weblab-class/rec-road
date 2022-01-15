import React, { useState } from "react";
import "./ListItem.css";

const ProfileItem = (props) => {
  const [isDone, setIsDone] = useState(props.value);

  const handleInputChange = (event) => {
    const value = event.target.checked;
    setIsDone(value);
  };

  return (
    <li className={isDone ? "ListItem-checked" : ""}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleInputChange}
      />
      <span className="ListItem-content">{props.prompt}</span>
    </li>
  );
};

export default ProfileItem;
