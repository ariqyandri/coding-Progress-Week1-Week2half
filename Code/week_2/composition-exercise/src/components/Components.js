import React from "react";

export default function Body(props) {
  return (
    <div className="item team">
      <img className="image" src={props.image} />
      <div className="component-title title">{props.title}</div>
    </div>
  );
}
