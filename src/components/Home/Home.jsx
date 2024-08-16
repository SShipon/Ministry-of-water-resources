import NoticeBoard from "../NoticeBoard/NoticeBoard";
import Tab from "../Tab/Tab";
import WaterCat from "../Water/WaterCat";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div>
            <Banner />
            <Tab />
            <NoticeBoard />
           <Services />
           <WaterCat />
        </div> 
    );
};

export default Home;