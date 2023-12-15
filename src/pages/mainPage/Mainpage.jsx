import React, { useEffect, useRef, useState } from "react";
import styles from "./Mainpage.module.css";
import Banner from "../../components/banner/Banner";
import Notes from "../../components/notes/Notes";
import PopUp from "../../components/popupBar/PopUp";
import NoteBody from "../../components/nodeBody/NoteBody";
import useIsMobile from "../../customHook/getScreenWidth";

const Mainpage = () => {
  const [noteName, setNoteName] = useState("");
  const [colourCode, setColourCode] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [hide, setHide] = useState(false);
  const [create, setCreate] = useState(false);
  const [noteList, setNoteList] = useState(
    JSON.parse(localStorage.getItem("note-list")) || []
  );
  const [noteHeader, setNoteHeader] = useState("");

  //returns true when screen size reaches <=450px for mobile device
  const screenSize = useIsMobile();

  // hide the modal on click outside of it..
  const popupRef = useRef(null);
  useEffect(() => {
    window.onclick = (e) => {
      if (e.target === popupRef.current) {
        setShowPopup(false);
        setNoteName("");
        setColourCode("");
      }
    };
  }, []);

  // saving the notes list to localstorage
  useEffect(() => {
    const listItem = { id: new Date(), noteName, colourCode };
    noteName.length && setNoteList([...noteList, listItem]);
    localStorage.setItem("note-list", JSON.stringify(noteList));
    setCreate(false);
    setNoteName("");
    setColourCode("");
  }, [create]);

  const handleClick = (item) => {
    setNoteHeader(() => item);
    setHide(true);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.section_1}
        style={screenSize && hide ? { display: "none" } : { display: "block" }}
      >
        <div className={styles.app_title}>
          <h1>Pocket Notes</h1>
        </div>
        <div className={styles.notes_list}>
          {noteList.map((item, id) => (
            <div key={id} onClick={() => handleClick(item)}>
              <Notes name={item.noteName} colour={item.colourCode} />
            </div>
          ))}
        </div>
        <button
          className={styles.add_button}
          onClick={() => setShowPopup(true)}
        >
          +
        </button>
      </div>

      <div className={styles.section_2} style={hide ? { display: "flex" } : {}}>
        {noteHeader ? (
          <NoteBody
            name={noteHeader.noteName}
            colour={noteHeader.colourCode}
            id={noteHeader.id}
            setHide={setHide}
          />
        ) : (
          <Banner />
        )}
      </div>

      {/* popup */}
      <div
        ref={popupRef}
        className={styles.popup_body}
        style={showPopup ? { display: "flex" } : { display: "none" }}
      >
        <PopUp
          setCreate={setCreate}
          setShowPopup={setShowPopup}
          setNoteName={setNoteName}
          noteName={noteName}
          setColourCode={setColourCode}
          colourCode={colourCode}
        />
      </div>
    </div>
  );
};

export default Mainpage;
