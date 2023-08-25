import React from "react";
import "./HosterPicture.scss";

function HosterName(props) {
    return (
        <div className="hosterImg">
            <img src={props.src} alt="" />
        </div>
    );
}

export default HosterName;
