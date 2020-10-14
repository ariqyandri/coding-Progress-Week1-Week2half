import React from "react";

export default function Head(props) {
  return (
    <div className="section section-what-usp">
      <div className="component-section-header">
        <div className="title-badge">
          <div className="title-badge-title">{props.badge}</div>
        </div>

        <h2>
          <div className="component-title ">{props.title}</div>
        </h2>

        <div className="description">{props.description}</div>
      </div>
    </div>
  );
}
