import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home'
import Resources from './Resources';

function NavBar() {
    return(
        <nav className="nav-top">
         <ul className='nav-menu'>
            <Link className="nav-list" to='/'>Home</Link>
            <Link className="nav-list" to='/resources'>Resources</Link>
            <Link className="nav-list" to='/management'>Management</Link>
            <Link className="nav-list" to='/islandpharmacy'>Team Island Pharmacy</Link>
            <Link className="nav-list" to='/about'>About</Link>
         </ul>
       </nav>

    )
}

export default NavBar;