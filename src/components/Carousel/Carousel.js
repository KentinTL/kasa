import React, { useState } from "react";
import "./Carousel.scss";
// Initialisation du Component Carousel
function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            {/* Conditions si Tableau de pictures est supérieur a 1 alors on affiche notre navigateur */}
            {pictures.length > 1 && (
                // On fait appel a la fonction goToPrevious
                <div className="prev" onClick={goToPrevious}>
                    <div className="prevTop"></div>
                    <div className="prevBottom"></div>
                </div>
            )}
            <img
                src={pictures[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
            />
            <div className="positionIndicator">
                {currentIndex + 1}/{pictures.length}
            </div>
            {/* Conditions si Tableau de pictures est supérieur a 1 alors on affiche notre navigateur */}
            {pictures.length > 1 && (
                // On fait appel a la fonction goToNext
                <div className="next" onClick={goToNext}>
                    <div className="nextTop"></div>
                    <div className="nextBottom"></div>
                </div>
            )}
        </div>
    );
}

export default Carousel;
