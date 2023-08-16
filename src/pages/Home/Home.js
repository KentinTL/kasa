import React from "react";
import Card from "../../components/Card/Card";
import "./Home.scss";
function Home() {
    return (
        <section id="homeContent">
            <div id="homeTitle">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div id="cardList">
                <Card />
            </div>
        </section>
    );
}

export default Home;
