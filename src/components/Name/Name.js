import React from "react";
import "./Name.scss";

function Name(props) {
    return <h2 className="detailsTitle">{props.name}</h2>;
}

export default Name;
