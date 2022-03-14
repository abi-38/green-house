import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem"
import { plantList } from "../data/plantList"
import Button from "./UI/Button"
import {useState} from 'react'
import Categories from './Categories'

const ShoppingList = ({ cart, updateCart }) => {
    const [activeCategory, setActiveCategory] = useState('')

    const categories = plantList.reduce(
		(acc, plant) => 
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
            // regarde si la valeur qui passe est présente dans le tableau categorie,
            // si c'est le cas, le tableau est retourné tels quel => acc (accumulateur)
            // si ce n'est pas le cas, on ajoute au tableau existant la categorie en question
            
		[]
    )

    console.log(categories)

    const addCart = (name, price) => {
        // on récupère la plante si elle est déjà présente dans le tableau (nom prix amount)
        const currentPlantSaved = cart.find((plant) => plant.name === name )
        // si l'article est déjà dans le panier -> currentPlantSaved est vrai
        if (currentPlantSaved) {
            // on récupère le tableau sans la valeur à ajouter (tous les autres plantes)
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            // on met dans notre variable d'état les plantes déjà présente 
            // et celle qu'on ajoute en lui ajoutant un amount => +1
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantSaved.amount +1}
            ])

        } else { // sinon on ajoute l'article dans le panier (name, price, amount = 1 puisque nouvel ajout)
            updateCart([
                ...cart,
                {name, price, amount: 1}
            ])
        }
    }
 
    return (
        <div>
            <h2>ShoppingList</h2>
            <Categories categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <ul className="gh-shoppingList-ul">
            {plantList.map(({ id, price, cover, name, water, light, category }) => 
                !activeCategory || activeCategory === category ? (
                    <div key={id}>
                    <PlantItem 
                        id={id}
                        price={price}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                    />
                    <Button text="Ajouter" onClick={() => addCart(name, price)} />
                </div>
                ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList