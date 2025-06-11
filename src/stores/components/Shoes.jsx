import React from 'react'
import shoes from '../data/shoes'
import { useCart } from '../../context/CartContext';

const Shoes = () => {
    const { addToCart } = useCart();
    const firstFiveImages = shoes.slice(0, 5)

    return (
        <>
            <div className='proTitle'>
                <h1>Footwear</h1>
                <div className='proSection'>
                    {
                        firstFiveImages.map((item) => (
                            <div className='imageBox' key={item.id}>
                                <img className='proImage' src={item.image} alt={item.name} />
                                <h3>{item.name}</h3>
                                <p><strong>₹ {item.price}</strong></p>
                                <p>{item.description}</p>
                                <h4>{item.category}</h4>
                                <button onClick={() => addToCart(item)}>Add to Cart</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Shoes