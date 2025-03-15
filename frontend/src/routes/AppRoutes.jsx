import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/index";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
        </Routes>
    );
}

export default AppRoutes;
