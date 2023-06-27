// import React, { useEffect, useState } from "react";
// import { IoMdSearch } from "react-icons/io";
// import { BsPlusLg } from "react-icons/bs";
// import { MdClose } from "react-icons/md";
// import { Link } from "react-router-dom";
// import NoteItem from "../NoteItem";

// const Notes = ({ notes }) => {
//     const [showSearch, setShowSearch] = useState(false);
//     const [text, setText] = useState("");
//     const [filteredNotes, setFilteredNotes] = useState(notes);

//     const handleSearch = () => {
//         setFilteredNotes(
//             notes.filter((note) => {
//                 if (
//                     note.title.toLowerCase().match(text.toLowerCase()) ||
//                     note.details.toLowerCase().match(text.toLowerCase())
//                 ) {
//                     return note;
//                 }
//             })
//         );
//     };

//     useEffect(handleSearch, [text]);

//     return (
//         <section>
//             <header className="notes__header">
//                 {!showSearch && <h2>kNotes</h2>}
//                 {showSearch && (
//                     <input
//                         type="text"
//                         autoFocus
//                         placeholder="search note..."
//                         value={text}
//                         onChange={(e) => {
//                             setText(e.target.value);
//                             handleSearch();
//                         }}
//                     />
//                 )}

//                 <button
//                     className="btn"
//                     onClick={() => setShowSearch((prevState) => !prevState)}
//                 >
//                     {showSearch ? <MdClose /> : <IoMdSearch />}
//                 </button>
//             </header>

//             <div className="notes__container">
//                 {filteredNotes.length === 0 && (
//                     <p className="empty__notes">No notes found</p>
//                 )}
//                 {filteredNotes.map((note) => (
//                     <NoteItem key={note.id} note={note} />
//                 ))}
//             </div>
//             <Link to="/create-note" className="btn add__btn">
//                 <BsPlusLg />
//             </Link>
//         </section>
//     );
// };

// export default Notes;

import React, { useEffect, useState, useCallback } from "react";
import { IoMdSearch } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import NoteItem from "../NoteItem";

const Notes = ({ notes }) => {
    const [showSearch, setShowSearch] = useState(false);
    const [text, setText] = useState("");
    const [filteredNotes, setFilteredNotes] = useState(notes);

    const handleSearch = useCallback(() => {
        setFilteredNotes(
            notes.filter((note) => {
                return (
                    note.title.toLowerCase().includes(text.toLowerCase()) ||
                    note.details.toLowerCase().includes(text.toLowerCase())
                );
            })
        );
    }, [notes, text]);

    useEffect(() => {
        handleSearch();
    }, [handleSearch]);

    return (
        <section>
            <header className="notes__header">
                {!showSearch && <h2>kNotes</h2>}
                {showSearch && (
                    <input
                        type="text"
                        autoFocus
                        placeholder="search note..."
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                )}

                <button
                    className="btn"
                    onClick={() => setShowSearch((prevState) => !prevState)}
                >
                    {showSearch ? <MdClose /> : <IoMdSearch />}
                </button>
            </header>

            <div className="notes__container">
                {filteredNotes.length === 0 && (
                    <p className="empty__notes">No notes found</p>
                )}
                {filteredNotes.map((note) => (
                    <NoteItem key={note.id} note={note} />
                ))}
            </div>
            <Link to="/create-note" className="btn add__btn">
                <BsPlusLg />
            </Link>
        </section>
    );
};

export default Notes;