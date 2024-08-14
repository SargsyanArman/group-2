import Card from "./Card";
import './ItemsList.css';

const List = () => {
    return (
        <ul className="list">
            <li>
                <Card itemURL='' imgSrc='' price={20} currency='$' title='asd' category='dsa' rating={4.5} rNum={100} />
            </li>
            <li>
                <Card itemURL='' imgSrc='' price={20} currency='$' title='asd' category='dsa' rating={4.5} rNum={100} />
            </li>
            <li>
                <Card itemURL='' imgSrc='' price={20} currency='$' title='asd' category='dsa' rating={4.5} rNum={100} />
            </li>
            <li>
                <Card itemURL='' imgSrc='' price={20} currency='$' title='asd' category='dsa' rating={4.5} rNum={100} />
            </li>
            <li>
                <Card itemURL='' imgSrc='' price={20} currency='$' title='asd' category='dsa' rating={4.5} rNum={100} />
            </li>
        </ul>
    );
};

export default List;

