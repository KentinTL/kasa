import React from "react";
import { useParams } from "react-router-dom";
import datas from "../../datas/appartement.json";

function Equipments() {
    const { id } = useParams();
    const appart = datas.find((appart) => appart.id === id);
    const equipments = appart.equipments.map((equipment) => {
        return <li key={equipment}>{equipment}</li>;
    });
    return equipments;
}

export default Equipments;
