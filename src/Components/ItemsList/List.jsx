import Card from "./Card";
import './ItemsList.css';

const List = () => {
    const cardExample = {
        url: '',
        imgSrc: 'imageExample.webp',
        price: 20,
        currency: '$',
        title: 'asd',
        category: 'dsa',
        rating: 4.9,
        rNum: 1000
    };
    const cardsArr = []
    for (let i = 0; i < 50; i++) {
        cardsArr.push(<li key={i}>
            <Card
                itemURL={cardExample.url}
                imgSrc={cardExample.imgSrc}
                price={cardExample.price}
                currency={cardExample.currency}
                title={cardExample.title}
                category={cardExample.category}
                rating={cardExample.rating}
                rNum={cardExample.rNum}
            ></Card></li>);
    }

    return (
        <ul className="list">
            {cardsArr}
        </ul>
    );
};

export default List;

