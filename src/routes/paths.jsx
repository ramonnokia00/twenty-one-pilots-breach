import { BrowserRouter, Route, Router, Routes } from "react-router";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/home";
import Vessel from "../components/Vessel";
import Twenty2009 from "../components/twentyonepilots2009";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route path="Vessel" element={<Vessel/>}/>
                    <Route path="twenty2009" element={<Twenty2009/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;