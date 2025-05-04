import { Outlet } from "react-router-dom";
import Navigation from "../../widgets/navigation/Navigation";

const NavigationLayout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavigationLayout;