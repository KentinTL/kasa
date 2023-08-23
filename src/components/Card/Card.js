import { Link } from "react-router-dom";
import datas from "../../datas/appartement.json";
import "./Card.scss";

function Card() {
    const cardDetails = datas.map((data) => {
        return (
            <Link id={data.id} key={data.id} to={`Details/${data.id}`}>
                <figure className="cardContent">
                    <img src={data.cover} alt="Présentation" />
                    <figcaption>{data.title}</figcaption>
                </figure>
            </Link>
        );
    });
    return cardDetails;
}

export default Card;
