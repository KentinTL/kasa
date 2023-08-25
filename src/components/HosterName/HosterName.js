import React from "react";
import "./HosterName.scss";
function HosterName(props) {
    // Diviser le nom en prénom et nom
    const fullNameArray = props.hostName.split(" ");
    const firstName = fullNameArray[0];
    const lastName = fullNameArray[1];

    return (
        <div className="hosterName">
            <p className="firstName">{firstName}</p>
            <p className="lastName">{lastName}</p>
        </div>
    );
}

export default HosterName;
