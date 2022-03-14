import '../styles/App.css'
import Banner from './Banner.js'
import logo from '../assets/logo.png'
import ShoppingList from './ShoppingList'
import Cart from './Cart'
import {useState} from 'react'
import Footer from './Footer'

function App() {
  const [cart, updateCart] = useState([])

  return (
    <div className="App">
      <Banner>
        <img className='gh-app-logo' src={logo} />
        <h1 className='gh-app-h1'>Green House</h1>
      </Banner>
      <main className='gh-app-main'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
