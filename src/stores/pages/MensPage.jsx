import React from 'react'
import mensWear from '../data/menswear'
import Navbar from '../components/pages/Navbar'

const MensPage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {mensWear.map((item) => (
                    <div className='productCard' key={item.id}>
                        <div className='pageImg'>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className='proName'>
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                            <h4>{item.category}</h4>
                        </div>
                    </div>


                ))}

            </div>
        </>
    )
}

export default MensPage