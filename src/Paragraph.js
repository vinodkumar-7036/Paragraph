import React, { useState } from "react";
import "./Paragraph.css";

function Paragraph() {
  const [inputParagraph, setInputParagraph] = useState("");
  const [outputParagraph, setOutputParagraph] = useState("");
  const [wordMeaning, setWordMeaning] = useState("");
  const onSubmit = () => {
    setOutputParagraph(inputParagraph);
    setInputParagraph("");
  };
  const wordMeaningClick = () => {
    setWordMeaning("");
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="container">
      <label>Enter Paragraph</label>
      <textarea
        id="paragraph"
        value={inputParagraph}
        name="paragraph"
        placeholder="400 charecter limit"
        onChange={(e) => setInputParagraph(e.target.value)}
      ></textarea>
      <button className="btn btn-secondary" onClick={() => onSubmit()}>
        Submit
      </button>
      <div>
        {outputParagraph.split(" ").map((item, index) =>
          item.length > 4 ? (
            <span
              className="word-link"
              onClick={() => wordMeaningClick(item)}
              key={index}
            >
              {" "}
              {item}{" "}
            </span>
          ) : (
            <span key={index}>{item} </span>
          )
        )}
      </div>
      <div>{wordMeaning && <span>{wordMeaning}</span>}</div>
    </div>
  );
}
export default Paragraph;
