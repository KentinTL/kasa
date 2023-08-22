import React, { useState, useRef } from "react";
import "./Collapse.scss";

const Collapsible = (props) => {
    const [open, setOpen] = useState(false);
    const [rotate, setRotate] = useState("0deg");
    const arrow = useRef();
    const toggleArrow = () => {
        setOpen(!open);
        if (!open) {
            setRotate("180deg");
        } else {
            setRotate("0deg");
        }
    };
    return (
        <div className="collapseContainer">
            <button className="collapseBtn" onClick={toggleArrow}>
                {props.label}
                <div style={{ rotate }} ref={arrow} className="arrow">
                    <div className="left-ash"></div>
                    <div className="right-ash"></div>
                </div>
            </button>
            <div className={open ? "childrenShow" : "childrenHide"}>
                <div className="childrenContent">{props.children}</div>
            </div>
        </div>
    );
};

export default Collapsible;
