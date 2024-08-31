import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utils/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        if (bottles.length) {
            const storedCart = getStoredCart()
            const savedCart = []
            for (const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart);
        }
    }, [bottles])

    const handleCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart)
        addToLS(bottle.id)
    }

    const handleRemoveFromCart = id => {
        // from the ui
        const remaining = cart.filter(bottle => bottle.id !== id);
        setCart(remaining)
        // from the LS
        removeFromLS(id)
    }

    return (
        <>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle
                        handleCart={handleCart}
                        key={bottle.id}
                        bottle={bottle}></Bottle>)
                }
            </div >
        </>
    );
};

export default Bottles;