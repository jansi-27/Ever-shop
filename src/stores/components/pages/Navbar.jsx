import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';

const Navbar = () => {
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login'); // Go back to login
    };

    return (
        <>
            <div className='navSection'>
                <div className='title'>
                    <h2>Evershop</h2>
                </div>
                <div className='search'>
                    <input type="text" placeholder='Search.........' />
                </div>
                <div className='user'>
                    {user ? (
                        <>
                            <span className='user-detail'>👤 {user.email}</span>
                            <button className="logout-btn" onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <Link to="/login" className='user-detail'>SignIN/SignUP</Link>
                    )}
                    <Link to="/cart" className='cart'>Cart ({totalItems})</Link>
                </div>
            </div>

            <div className="suBMenu">
                <ul>
                    <Link to='/men'><li>Mens Fashion</li></Link>
                    <Link to='/women'><li>Womens Fashion</li></Link>
                    <Link to='/kids'><li>Kids Fashion</li></Link>
                    <Link to='/shoes'><li>Footwear</li></Link>
                    <Link to='/sunglasses'><li>Designer Sunglasses</li></Link>
                    <Link to='/bags'><li>Bag Collection</li></Link>
                    <Link to='/watch'><li>Watches</li></Link>
                    <Link to='/jewellery'><li>Fashion Jewellery</li></Link>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
