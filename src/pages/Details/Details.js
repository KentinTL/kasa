import "./Details.scss";
import { useParams } from "react-router-dom";
import datas from "../../datas/appartement.json";
import Collapse from "../../components/Collapse/Collapse";
import Carousel from "../../components/Carousel/Carousel";
import Name from "../../components/Name/Name";
import Location from "../../components/Location/Location";
import Tag from "../../components/Tag/Tag";
import HosterName from "../../components/HosterName/HosterName";
import HosterPicture from "../../components/HosterPicture/HosterPicture";
import Notation from "../../components/Notation/Notation";
import Equipments from "../../components/Equipments/Equipments";
import NotFound from "../../pages/NotFound/NotFound";

function Details() {
    const { id } = useParams();

    const appart = datas.find((appart) => appart.id === id);
    if (appart === undefined) {
        return <NotFound />;
    } else {
        return (
            <section className="detailsContainer">
                <div className="carouselContainer">
                    <Carousel pictures={appart.pictures} />
                </div>
                <div className="basicInfos">
                    <div className="leftBasicInfos">
                        <Name name={appart.title} />
                        <Location location={appart.location} />
                        <div className="tagContainer">
                            <Tag />
                        </div>
                    </div>
                    <div className="rightBasicInfos">
                        <div className="hosterInfos">
                            <HosterName hostName={appart.host.name} />
                            <HosterPicture src={appart.host.picture} />
                        </div>
                        <Notation rating={appart.rating} />
                    </div>
                </div>
                <div className="collapseGlobal">
                    <Collapse label="Description">
                        <p>{appart.description}</p>
                    </Collapse>
                    <Collapse label="Équipements">
                        <Equipments />
                    </Collapse>
                </div>
            </section>
        );
    }
}

export default Details;
