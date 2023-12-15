import React, { useEffect, useState } from "react";
import styles from "./PopUp.module.css";

const PopUp = ({setCreate,setNoteName,setColourCode,setShowPopup,noteName, colourCode,}) => {
  const Colours = [
    "rgba(179, 139, 250, 1)",
    "rgba(255, 121, 242, 1)",
    "rgba(67, 230, 252, 1)",
    "rgba(241, 149, 118, 1)",
    "rgba(0, 71, 255, 1)",
    "rgba(102, 145, 255, 1)",
  ];
  const [isDisabled, setIsDisabled] = useState(true);
  const handleClick = () => {
    if (noteName.length && colourCode.length) {
      setShowPopup(false);
      setCreate(true);
    }
  };
  useEffect(() => {
    noteName.length && colourCode.length? setIsDisabled(false): setIsDisabled(true);
  }, [noteName, colourCode]);
  return (
    <div className={styles.popUp_overlays}>
      <h2>Create New group</h2>
      <div className={styles.name_input}>
        <h2>Group name</h2>
        <input
          required
          placeholder="Enter group name"
          type="text"
          value={noteName}
          name="noteName"
          onChange={(e) => setNoteName(e.target.value)}
        />
      </div>
      <div className={styles.colour_input}>
        <h2>Choose colour</h2>
        <div>
          {Colours.map((colour) => (
            <button
              key={colour}
              style={{ backgroundColor: colour }}
              onClick={() => setColourCode(colour)}
            />
          ))}
        </div>
      </div>
      <div className={styles.button}>
        <button
          disabled={isDisabled}
          style={isDisabled?{ backgroundColor:"rgba(0, 31, 139, 0.5)"}: { backgroundColor: "rgba(0, 31, 139, 1)" }}
          type="button"
          onClick={handleClick}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default PopUp;
