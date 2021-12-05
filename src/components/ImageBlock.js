import React from "react";
import "../styles/ImageBlock.scss";

function ImageBlock(props) {
  return (

    <div className="imageBlocksContent">
    
        <img src={props.image} className="imageBack" alt="placeholder" />
        <div className="category">
          <p className="categoryText">{props.category}</p>
        </div>
        <div className="imageBlotext">
          <p className="textSectionH1">{props.title}</p>
          <p className="textSectionT1">{props.date}</p>
        </div>

    </div>

  );

}

export default ImageBlock;

