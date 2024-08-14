import React from 'react';
import './ItemsList.css';

const Card = ({ itemURL, imgSrc, price, currency, title, category, rating, rNum }) => {
    return (
        <div className="card">
            <a href={itemURL} className="card-link">
                <div className="thumbnail">
                    <img src={imgSrc} alt={title} className="thumbnail-image" />
                    <button className="like-button">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                    <div className="tags">
                        {/* Tags can be added here */}
                    </div>
                </div>
                <div className="info">
                    <h4 className="price">{price} {currency}</h4>
                    <p className="item-title">
                        {title}
                        <span className="categories">/ {category}</span>
                    </p>
                    <div className="rating">
                        {rating}
                        <span className="ratings-number"> &#8901; {rNum}</span>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Card;
