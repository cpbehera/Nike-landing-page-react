import './Nav.css';
import { useState } from 'react';

const Nav = ()=>{
    const [menu,setMenu] = useState(false);
    const toggleMenu = ()=>{
        if(menu === false){
            setMenu(true);
        }
        else if(menu === true){
            setMenu(false);
        }
    }
    return (
        <nav className='container'>
            <div className="logo">
                <img src="../Images/brand_logo.png" alt="" />
            </div>
            <ul className={menu ? "menuOpen" : "menuClose" }>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button>Login</button>
            <div className="mobile-menu">
            <i class="fa-solid fa-bars" onClick={toggleMenu}></i>
            </div>
        </nav>
    )
}

export default Nav;