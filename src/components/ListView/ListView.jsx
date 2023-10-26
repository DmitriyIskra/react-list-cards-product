import './css/ListView.css';
import ShopItem from '../ShopItem/ShopItem';

export default function ListView(props) {
    const { items } = props;

    return (
        <ul className="items__list">
            {items.map( (item, index) => <ShopItem 
            item = {item} 
            index = {index} />)}
        </ul>
    )
}
