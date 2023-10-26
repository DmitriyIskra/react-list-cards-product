import './css/ShopItem.css';

export default function ShopItem(props) {
    const { item, index } = props;

    return (
        <li className='shop-item__wrapper' key={index}>
            <div className="shop-item__wr-img">
                <img className="shop-item__img" src={item.img} alt="" />
            </div>
            <h2 className="shop-item__title">{item.name}</h2>
            <div className="shop-item__color">{item.color}</div>
            <div className="shop-item__price">{'$' + item.price}</div>
            <div className="shop-item__to-cart">ADD TO CART</div>
        </li>
    )
}
