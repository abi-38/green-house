import CareScale from "./CareScale"
import '../styles/ShoppingList.css'

const PlantItem = ({ id, price, cover, name, water, light }) => {
 
    return (
        <li key={id} className="gh-shoppingList-li">
            <span className="gh-shoppingList-price">{price} €</span>
            <img src={cover} className='gh-shoppingList-img' />
            <span className="gh-shoppingList-name">{name}</span>
            <CareScale value={water} type='water' />
            <CareScale value={light} type='light' />
        </li>
    )
}

export default PlantItem