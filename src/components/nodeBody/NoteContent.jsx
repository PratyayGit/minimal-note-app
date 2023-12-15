import React from "react";
import styles from "./NoteBody.module.css";
import circle from "../../assets/icons/circle.png";
const NoteContent = ({ content }) => {
  return (
    <div className={styles.note_content}>
      <p>{content.paragraph}</p>
      <div className={styles.date_time}>
        <span>{content.date}</span>
        <span>
          <img src={circle} alt="circle" />
        </span>
        <span>{content.time}</span>
      </div>
    </div>
  );
};

export default NoteContent;
