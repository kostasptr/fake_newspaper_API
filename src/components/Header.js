import React from "react";
import "../styles/Header.scss";

function Header(props) {

  return (
    <div className="topBar">
      <ul>
        <li><a href="#thewire">THE WIRE</a></li>  
        {/* slice makes a copy of the original array by taking a slice from the element at index 0 to the last element */}
        {props.categories.slice(0).reverse().map((category) => {
          return <li><a href={`#${category}`}>{category}</a></li>;
        })}
      </ul>
    </div>
  );
}

export default Header;