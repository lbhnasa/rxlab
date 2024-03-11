import {Routes, Route} from 'react-router-dom';
import Resources from './Resources';
import Home from './Home';
import Management from './Management';
import IslandPharmacy from './IslandPharmacy';
import About from './About';

function Routing() {
    return(
        <>
          <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/resources" element={<Resources/>} />
                <Route path="/management" element={<Management/>} />
                <Route path="/islandpharmacy" element={<IslandPharmacy/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </>
    ) 
}

export default Routing;