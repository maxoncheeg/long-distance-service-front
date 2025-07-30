import { Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import TrucksPage from "../../pages/trucks/TrucksPage";
import { ROUTES } from "../../shared/config/routes";
import NavigationLayout from "../layouts/NavigationLayout";
import EmptyLayout from "../layouts/EmptyLayout";
import TruckByIdPage from "../../pages/trucks/TruckByIdPage";
import Home from "../../pages/Home";
import { LoginPage } from "../../pages/auth/LoginPage";
import { RegisterPage } from "../../pages/auth/RegisterPage";

export default function LDSRoutes() {
    return (
        <Routes>
            <Route element={<NavigationLayout />}>
                <Route index path={ROUTES.home} element={<Home />} />
                <Route path={ROUTES.trucks.base} element={<TrucksPage />} />
                <Route path={ROUTES.about} element={<About />} />
            </Route>
            <Route element={<NavigationLayout />}>
                <Route index path={ROUTES.profile.base} element={<Home />} />
            </Route>
            <Route element={<EmptyLayout />}>
                <Route path={ROUTES.trucks.byId} element={<TruckByIdPage />} />
                <Route path={ROUTES.auth.login} element={<LoginPage />} />
                <Route path={ROUTES.auth.register} element={<RegisterPage />} />
            </Route>
        </Routes>
    );
}
