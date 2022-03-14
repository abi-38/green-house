import { useState } from 'react'
import Panier from '../assets/panier.png'
import '../styles/Cart.css'
import Button from './UI/Button'

const Cart = ({ cart, updateCart }) => {
    const [isShow, setIsShow] = useState(false)

    const total = cart.reduce(
        (acc, plant) => acc + plant.price * plant.amount,
        // (previousValue, currentValue) => previousValue + currentValue,
        0 // initialValue
    )
    
    return isShow ? (
        <div className='gh-cart-panier'>
            {cart.length > 0 ? (
                <div>
                    <h2 className='gh-cart-titre'>Panier</h2>
                    <ul className='gh-cart-plantList'>
                        {cart.map((plant, index) => 
                            <li key={`${plant.name}--${index}`}>{plant.name} {plant.price} € x {plant.amount}</li>
                        )}
                    </ul>
                    <h3>Total : {total}</h3>
                    <Button className='gh-cart-button' text='Vider le panier'  onClick={() => updateCart([])} />
                </div>
                ) : (
                    <div>Panier vide</div>
                )
            }
            <Button className='gh-cart-button' text='Fermer le panier' onClick={() => setIsShow(false)} />
        </div>

    ) : (
        <div>
            <img className='gh-cart-logo' src={Panier} onClick={() => setIsShow(true)} />
        </div>
    )
}

export default Cart