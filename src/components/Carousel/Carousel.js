import React, { useState } from "react";
import "./Carousel.scss";

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
            {pictures.length > 1 && (
                <div className="prev" onClick={goToPrevious}>
                    <div className="prevTop"></div>
                    <div className="prevBottom"></div>
                </div>
            )}
            <img
                src={pictures[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
            />
            {pictures.length > 1 && (
                <div className="next" onClick={goToNext}>
                    <div className="nextTop"></div>
                    <div className="nextBottom"></div>
                </div>
            )}
        </div>
    );
}

export default Carousel;
