import './css/ShopCard.css';

export default function ShopCard(props) {
    const { card, index } = props;

    return ( 
        <li className='card' key={index}>
            <h2 className="card__title">{card.name}</h2>
            <div className="card__color-product">{card.color}</div>
            <div className="card__wr-img">
                <img className="card__img" src={card.img} alt="..." />
            </div>
            <div className="card__wr-price-cart">
                <div className="card__price">{'$' + card.price}</div>
                <div className="card__to-cart">ADD TO CART</div>
            </div>
        </li>
    )
}
