import { Outlet } from "react-router-dom";
import Footer from "../sheared/Footer/Footer";
import Navigation from "../sheared/Navigation/Navigation";


const Main = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;