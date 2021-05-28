import React, { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Players from './components/Players/Players';

function App() {
    const [cart, setCart] = useState([]);

    const addPlayerToCart = (player) => {
        const newCart = [...cart, player];
        setCart(newCart)
    }

    return ( <
        >
        <
        Header / >
        <
        div className = "row mx-2" >
        <
        Players addPlayerToCart = { addPlayerToCart }
        /> <
        Cart cart = { cart }
        /> < /
        div > <
        Footer / >
        <
        />
    );
}

export default App;