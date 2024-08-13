import React, { useState } from 'react'
import NavBar from './NavBar'

const Header = () => {
    const [sign, setSign] = useState(null);


    const handleMenuClick = (event) => {
        setSign(event.currentTarget);
    };

    const handleMenuClose = () => {
        setSign(null);
    };
    return (
        <div>
            <NavBar handleMenuClose={handleMenuClose} handleMenuClick={handleMenuClick} sign={sign} />
        </div>
    )
}

export default Header