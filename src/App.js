import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import RedirectPage from "./Components/Redirect/RedirectPage";
import Banned from "./Pages/Banned/Banned";
import Installed from "./Pages/Installed/Installed";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/banned" element={<Banned />} />
                <Route exact path="/installed" element={<Installed />} />
                <Route exact path='/download' element={<RedirectPage href={"https://chrome.google.com/webstore/detail/chromegWle-omegle-ip-puller/gcbbaikjfjmidabapdnebofcmconhdbn"} />} />
                <Route exact path='/developer' element={<RedirectPage href={"https://isaackogan.com"} />} />
                <Route exact path='/discord' element={<RedirectPage href={"https://discord.gg/KDqHBrZ2Yn"} />} />
                <Route exact path='/github' element={<RedirectPage href={"https://github.com/ChromegleApp/Chromegle"} />} />
                <Route exact path='/omegle' element={<RedirectPage time={3000} href={"https://omegle.com"} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
