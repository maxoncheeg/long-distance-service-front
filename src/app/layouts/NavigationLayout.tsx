import { Outlet } from "react-router-dom";
import Navigation from "../../widgets/navigation/Navigation";

const NavigationLayout = () => {
    return (
        <div>
            <Navigation />
            <main className="m-auto w-full">
                <Outlet />
            </main>
        </div>
    );
};

export default NavigationLayout;
