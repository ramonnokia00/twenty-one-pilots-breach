import { BrowserRouter, Route, Router, Routes } from "react-router";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/home";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;