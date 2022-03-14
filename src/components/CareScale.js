import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const CareScale = ({ value, type}) => {
    const range = [1, 2, 3];
    const quantityLabel = {
        1: 'un peu',
        2: 'modérément',
        3: 'beaucoup'
    }
    const typeOf = type === 'light' ? Sun : Water
    console.log(typeOf)
    
    const message = () => {
        alert(`Cette plante requiert ${quantityLabel[value]} ${type === 'light' ? 'de soleil' : 'd\'arrosage'}`)
    }

    return (
        <div onClick={() => message()}>
            {range.map((rangeElem) => (
                value >= rangeElem ? <span key={rangeElem}><img src={typeOf} /></span> : null
            ))}
        </div>
    )
}

export default CareScale