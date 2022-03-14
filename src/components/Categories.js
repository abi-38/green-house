const categories = ({ categories, activeCategory, setActiveCategory }) => {
    
 
    return (
        <select onChange={(e) => setActiveCategory(e.target.value)} className="gh-shoppingList-ul">
            <option value="">--</option>
            {categories.map((categorie) => 
                <option value={categorie} key={categorie} >
                    {categorie}
                </option>
            )}
            <option value="" onAuxClick={() => setActiveCategory('')}>Réinitialiser</option>
        </select>

    )
}

export default categories