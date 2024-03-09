import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home'
import Resources from './Resources';

function NavBar() {
    return(
        <ul className='nav-menu'>
        
         <Link className="nav-list" to='/'>Home</Link>
         <Link className="nav-list" to='/resources'>Resources</Link>
         <Link className="nav-list" to='/management'>Management</Link>
         <Link className="nav-list" to='/islandPharmacy'>Team Island Pharmacy</Link>
         <Link className="nav-about" to='/about'>About</Link>
        </ul>
    )
}

export default NavBar;