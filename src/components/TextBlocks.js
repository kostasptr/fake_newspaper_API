import React from "react";
import "../styles/TextBlocks.scss";

function TextBlocks(props) {
  return (

<div className="textBlocksContent">
  <p className="textSectionH3">{props.title}</p>
  <div>
    <img src={props.image} className="imageTLcorner" alt="placeholder" />
    <p className="textArticle">{props.text}</p>
  </div>
  <div className="footerTextBlock">
    <img src={props.author} className="ellipse" alt="author" />
    <p className="textSectionT3">{props.date}</p>
    <p className="categoryText3">{props.category}</p>
  </div>
</div>

);
}

export default TextBlocks;
