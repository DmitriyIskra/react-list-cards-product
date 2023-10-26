import './css/CardsView.css'
import ShopCard from '../ShopCard/ShopCard'

export default function CardsView(props) {

    const { cards } = props 
    
    return (
        <ul className="wrapper-cards">
            {cards.map( (card, index) => <ShopCard 
            card = {card}
            index = {index} /> )}
        </ul>
    )
}
