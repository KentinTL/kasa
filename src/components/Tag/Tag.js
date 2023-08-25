import React from "react";
import { useParams } from "react-router-dom";
import datas from "../../datas/appartement.json";
import "./Tag.scss";

function Tag() {
    const { id } = useParams();
    const appart = datas.find((appart) => appart.id === id);
    const tags = appart.tags.map((tag) => {
        return (
            <div className="detailsTag" key={tag}>
                {tag}
            </div>
        );
    });
    return tags;
}

export default Tag;
