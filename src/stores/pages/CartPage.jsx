import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
    const { cartItems, removeFromCart } = useCart();

    if (cartItems.length === 0) return <h2>Your cart is empty.</h2>;

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <h3>{item.name} (x{item.quantity})</h3>
                    <p>Price: ₹{item.price * item.quantity}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default CartPage;
