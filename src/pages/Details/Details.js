import { useParams } from "react-router-dom";
import datas from "../../datas/appartement.json";
import Collapse from "../../components/Collapse/Collapse";

function Details() {
    const { id } = useParams();

    const appart = datas.find((appart) => appart.id === id);
    return (
        <div>
            <h2>{appart.title}</h2>
            <Collapse label="Description">
                <p>{appart.description}</p>
            </Collapse>
            <Collapse label="Équipements">
                <p>{appart.equipments}</p>
            </Collapse>
        </div>
    );
}

export default Details;
