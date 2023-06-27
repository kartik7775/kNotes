import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <Link to={`/edit-note/${note.id}`} className="note">
      <h4>
        {note.title.length > 35 ? note.title.substr(0, 35) + "..." : note.title}
      </h4>

      <p>
        {note.details.length > 50
          ? note.details.substr(0, 50) + "..."
          : note.details}
      </p>

      {/* <p className="time">{note.time}</p>
      <p className="date">{note.date}</p> */}
      <p className="date">{note.time} {note.date}</p>
    </Link>
  );
};

export default NoteItem;
