import {Routes, Route} from 'react-router-dom';
import Resources from './Resources';
import Home from './Home';


function Routing() {
    return(
        <>
          <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/resources" element={<Resources/>} />
            </Routes>
        </>
    ) 
}

export default Routing;