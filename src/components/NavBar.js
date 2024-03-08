import React from 'react';
import { Link, Routes, Route  } from 'react-router-dom';
import Home from './Home'
import Resources from './Resources';

function NavBar() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/resources" element={<Resources/>} />
            </Routes>
            <Link to="/resources">Resources</Link>
        
        </>
    )
}

export default NavBar;