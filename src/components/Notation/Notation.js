import React from "react";

function Notation({ rating }) {
    const filledStars = parseInt(rating);
    const emptyStars = 5 - filledStars;

    const filledStarIcon = "★"; // Utilise l'icône d'étoile remplie
    const emptyStarIcon = "☆"; // Utilise l'icône d'étoile vide

    return (
        <div className="notation">
            {[...Array(filledStars)].map((_, index) => (
                <span key={index} className="filledStar">
                    {filledStarIcon}
                </span>
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <span key={index} className="emptyStar">
                    {emptyStarIcon}
                </span>
            ))}
        </div>
    );
}

export default Notation;
