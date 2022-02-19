import App from './App.js';
import Profile from './Profile.js';
import MiniGame from './MiniGame.js';
import Jai_Gay_Ray from './Jai-Gay-Ray.js';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/minigame" element={<MiniGame/>} />
                <Route path="/Jai-Gay-Ray" element={<Jai_Gay_Ray/>} />
            </Routes>
        </BrowserRouter>
            
    )
}

export default Router;