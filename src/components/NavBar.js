import React from 'react';
import { Link, Router } from 'react-router-dom';

function NavBar() {
    return(
        <>
            <Router>
            <Link to="/home">Home</Link>
            </Router>
        </>
    )
}

export default NavBar;