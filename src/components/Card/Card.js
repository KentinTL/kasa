import { Link } from "react-router-dom";
import datas from "../../datas/appartement.json";
import "./Card.scss";

function Card() {
    const cardDetails = datas.map((data) => {
        return (
            <Link id={data.id} key={data.id} to="/Details">
                <div className="cardContent">
                    <img src="" alt="" />
                    <h2>{data.title}</h2>
                </div>
            </Link>
        );
    });
    return cardDetails;
}

export default Card;
