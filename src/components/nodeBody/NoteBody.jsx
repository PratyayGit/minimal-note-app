import React, { useEffect, useState } from "react";
import styles from "./NoteBody.module.css";
import date from "date-and-time";
import NoteContent from "./NoteContent";

import sendBtn from "../../assets/icons/sendButton.png";
import sendBtnblue from "../../assets/icons/sendButtonblue.png";
import back from "../../assets/icons/back.png";


const NoteBody = ({ name, colour, id, setHide }) => {
  const [isText, setIsText] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [paragraph, setParagraph] = useState("");
  const [noteContent, setNoteContent] = useState(
    JSON.parse(localStorage.getItem("note-data")) || []
  );
  const Trim2Letters = (name) => {
    return (
      name.split(" ")[0].slice(0, 1).toUpperCase() +
      name.split(" ")[1].slice(0, 1).toUpperCase()
    );
  };
  const Trim1Letter = (name) => {
    return name.split(" ")[0].slice(0, 1).toUpperCase();
  };
  const calculateDate = () => {
    const now = new Date();
    return date.format(now, "DD MMM YYYY");
  };
  const calculateTime = () => {
    const now = new Date();
    return date.format(now, "hh:mm A");
  };
  

  useEffect(() => {
    const data = {
      id,
      paragraph,
      date: calculateDate(),
      time: calculateTime(),
    };
    paragraph.length && setNoteContent([...noteContent, data]);
    localStorage.setItem("note-data", JSON.stringify(noteContent));
    setIsSend(false);
    setParagraph("");
  }, [isSend]);

  useEffect(() => {
    paragraph ? setIsText(true) : setIsText(false);
  }, [paragraph]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img onClick={() => setHide(false)} src={back} alt="back-btn" />
        <div style={{ backgroundColor: colour }}>
          {name.split(" ").length > 1 ? Trim2Letters(name) : Trim1Letter(name)}
        </div>
        <h1>{name}</h1>
      </div>

      <div className={styles.note_body}>
        {noteContent
          .filter((val) => val.id === id)
          .map((content, index) => (
            <NoteContent key={index} content={content} />
          ))}
      </div>

      <div className={styles.footer}>
        <div>
          <textarea
            onChange={(e) => setParagraph(e.target.value)}
            value={paragraph}
            placeholder="Enter your text here..."
            required
          />
          <div className={styles.btn}>
            <button onClick={() => setIsSend(true)}>
              <img src={isText ? sendBtnblue : sendBtn} alt="send-btn" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteBody;
