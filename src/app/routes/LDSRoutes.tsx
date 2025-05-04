import { Routes, Route } from 'react-router-dom'
import About from '../../pages/About'
import TrucksPage from '../../pages/trucks/TrucksPage'
import { ROUTES } from '../../shared/config/routes'
import NavigationLayout from '../layouts/NavigationLayout'
import EmptyLayout from '../layouts/EmptyLayout'
import TruckByIdPage from '../../pages/trucks/TruckByIdPage'

export default function LDSRoutes() {
    return (
        <Routes>
            <Route path='/' element={<NavigationLayout />}>
                <Route index element={<TrucksPage />} />
                <Route path={ROUTES.about} element={<About />} />
            </Route>
            <Route element={<EmptyLayout />}>
                <Route path={ROUTES.trucks.byId} element={<TruckByIdPage />} />
            </Route>
        </Routes>
    )
}
