const Card = ({ itemURL, imgSrc, price, currency, title, category, rating, rNum }) => {
    return (
        <div className="card">
            <a href={itemURL}>
                <span>
                    <div className="thumbnail" style={{background: `center/100% no-repeat url(${imgSrc})`}}>
                        <button className="likeButton"><i className="fa-regular fa-heart"></i></button>
                        <div className="tags">

                        </div>
                    </div>
                    <div className="info">
                        <h4 className="price">{price} {currency}</h4>
                        <p className="itemTitle">{title} <span className="categories">/ {category}</span></p>
                        <span className="rating"><i className="fa-solid fa-star"></i> {rating} </span><span className="ratingsNumber"> &#8901; {rNum} votes</span>
                    </div>
                    <button className="cartBtn"><i className="fa-solid fa-cart-shopping"></i> Add to cart</button>
                </span>
            </a>
        </div>
    );
};

export default Card;

