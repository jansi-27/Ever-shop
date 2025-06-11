import React from 'react';
import { useCart } from '../../context/CartContext';


const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div className='proTitle'>
            <h1>Your Cart</h1>
            <div className='proSection'>
                {cartItems.length === 0 ? (
                    <p>No items in cart.</p>
                ) : (
                    cartItems.map((item) => (
                        <div className='imageBox' key={item.id}>
                            <h3>{item.name}</h3>
                            <p>₹ {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Cart;