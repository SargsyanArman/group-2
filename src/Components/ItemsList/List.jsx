import Card from "./Card";
import './ItemsList.css';

const List = () => {
    return (
        <ul className="list">
            <li>
                <Card itemURL='' imgSrc='https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.webp?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=' price={20} currency='$' title='asd' category='dsa' rating={4.5} rNum={100} />
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

