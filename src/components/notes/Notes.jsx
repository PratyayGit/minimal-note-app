import React, { useState } from "react";
import styles from "./Notes.module.css";
const Notes = ({ colour, name }) => {
  const Trim2Letters = (name) => {
    return (
      name.split(" ")[0].slice(0, 1).toUpperCase() + name.split(" ")[1].slice(0, 1).toUpperCase()
    );
  };
  const Trim1Letter = (name) => {
    return name.split(" ")[0].slice(0, 1).toUpperCase();
  };
  return (
    <div className={styles.note_section}>
      <div style={{ backgroundColor: colour }}>
        {name.split(" ").length > 1 ? Trim2Letters(name) : Trim1Letter(name)}
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default Notes;
