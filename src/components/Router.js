import {Route, Routes} from "react-router-dom";

import Home from "./home/Home";
import RedirectPage from "./redirect/RedirectPage";
import Banned from "./banned/Banned";


const SectionRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/banned" element={<Banned /> } />
            <Route exact path='/download' element={<RedirectPage href={"https://chrome.google.com/webstore/detail/chromegWle-omegle-ip-puller/gcbbaikjfjmidabapdnebofcmconhdbn"} />} />
            <Route exact path='/developer' element={<RedirectPage href={"https://isaackogan.com"} />} />
            <Route exact path='/discord' element={<RedirectPage href={"https://discord.gg/KDqHBrZ2Yn"} />} />
            <Route exact path='/github' element={<RedirectPage href={"https://github.com/ChromegleApp/Chromegle"} />} />
            <Route exact path='/omegle' element={<RedirectPage time={3000} href={"https://omegle.com"} />} />
        </Routes>
    )

}

export default SectionRouter;
