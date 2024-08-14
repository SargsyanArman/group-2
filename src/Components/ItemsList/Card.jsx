const Card = ({ itemURL, imgSrc, price, currency, title, category, rating, rNum }) => {
    return (
        <div className="card">
            <a href={itemURL}>
                <span>
                    <div className="thumbnail">
                        <img src={imgSrc} alt="" />
                        <button className="likeButton"><i className="fa-regular fa-heart"></i></button>
                        <div className="tags">

                        </div>
                    </div>
                    <div className="info">
                        <h4 className="price">{price} {currency}</h4>
                        <p className="itemTitle">{title} <span className="categories">/ {category}</span></p>
                        <div className="rating"> {rating} <span className="ratingsNumber"> &#8901; {rNum} </span></div>
                    </div>
                </span>
            </a>
        </div>
    );
};

export default Card;

