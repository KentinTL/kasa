import React from "react";
import bgHome from "../../assets/bg_title_home.png";
import Card from "../../components/Card/Card";
import "./Home.scss";
function Home() {
    return (
        <section id="homeContent">
            <div id="homeTitle">
                <img src={bgHome} alt="Fond de titre" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div id="cardList">
                <Card />
            </div>
        </section>
    );
}

export default Home;
