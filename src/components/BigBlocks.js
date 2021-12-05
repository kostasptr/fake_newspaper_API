import React from "react";
import "../styles/BigBlocks.scss";

function BigBlocks(props) {
  return (
    <div className="bigBlocksContent">
      {/* style={{backgroundImage: `url("https://via.placeholder.com/435x300")`, backgroundPosition: 'top', */}
      {/* backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} */}
      <img src="https://via.placeholder.com/435x400" className="imageBack2" alt="placeholder" />
      <div className="category2">
        <p className="categoryText2">{props.category}</p>
      </div>
      <div className="bigBloText">
        <div className="footerBigBlock">
          <p className="textSectionH2">{props.title}</p>
          <p className="textSectionT2">{props.date}</p>
        </div>
        <img src="https://via.placeholder.com/45x45" className="ellipse" alt="author" />
      </div>
    </div>

  );
}

export default BigBlocks;