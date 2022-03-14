import { useState } from "react"
import '../styles/Footer.css'

const Footer = () => {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const handleBlur = () => {
        if(input.includes('@')) {
            alert('ok')
        } else {
            alert('ajout un @')
        }
    }

    return (
        <footer className="gh-footer">
            <p>Pour les passionné·e·s de plantes 🌿🌱🌵</p>
            <form>
                <label>Laissez-nous votre mail :</label>
                <input 
                        type="text" 
                        name="input"
                        value={input}
                        onChange={(e) => handleChange(e)}
                        className='gh-footer-input'
                        onBlur={handleBlur}
                    />
            </form>
        </footer>
    )
}

export default Footer