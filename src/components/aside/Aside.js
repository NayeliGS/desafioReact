import React from "react";
import Postaside from "./Postaside";

export default function Aside() {
  return (
    <aside>
      <div className="partStaff">Staff Picks</div>

      <Postaside title="Back to the Drawing Board"/>
      <Postaside title="Living Color: Designing through synesthesia"/>
      <Postaside title="Default No to AI Training on Your Stories"/>
      <Postaside title="The Torn Posters in the Paris Metro (October 2023)"/>
      
      <div className="greenLetters">See the full list</div>

      <div className="squareBlue">
        <div className="iconX">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div className="writingFirts">Writing on Medium</div>
        <div className="writingSecond">New writer FAQ</div>
        <div className="writingSecond">Expert writting advice</div>
        <div className="writingSecond">Grow your readership</div>
        <div className="buttonBlack">Start writing</div>
      </div>
    </aside>
  );
}
