import { useState } from "react";
import { FaHome } from "react-icons/fa";
import MinistryRelated from "./MinistryRelated";
import SubOrganizations from "./SubOrganizations";
import Projects from "./Projects";
import Contact from "./Contact";
import Meetings from "./Meetings";
import Downloads from "./Downloads";
import Helplines from "./Helplines";
const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div id="portfolio" className="container mx-auto p-4">
      <h3 className="text-3xl font-extrabold text-center my-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400">
      
      </h3>
      <div className="flex mb-4 justify-center items-center">
        <p className="text-4xl"> < FaHome /></p>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 1 ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(1)}>
            
          <span className="text-xs lg:text-lg">মন্ত্রণালয় সম্পর্কিত</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 2 ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(2)}
        >
          <span className="text-xs lg:text-lg">অধীনস্থ সংস্থাসমূহ</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 3 ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(3)}
        >
          <span className="text-xs lg:text-lg">প্রকল্প</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 4 ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(4)}
        >
          <span className="text-xs lg:text-lg">যোগাযোগ</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 5 ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(5)}
        >
          <span className="text-xs lg:text-lg">গ্যালারী</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 6 ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(6)}
        >
          <span className="text-xs lg:text-lg">সভা সংক্রান্ত</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 7 ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(7)}
        >
          <span className="text-xs lg:text-lg">ডাউনলোড</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 8 ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(8)}
        >
          <span className="text-xs lg:text-lg">হেল্পলাইনসমূহ</span>
        </button>
      </div>

      <div className="flex-grow">
        <div className={`${toggleState === 1 ? "block" : "hidden"} p-4 rounded-lg`}>
          <hr className="my-2" />
          <MinistryRelated />
        </div>

        <div className={`${toggleState === 2 ? "block" : "hidden"} p-4 rounded-lg`}>
          <hr className="my-2" />
          <SubOrganizations />
        </div>

        <div className={`${toggleState === 3 ? "block" : "hidden"} p-4 rounded-lg`}>
          <hr className="my-2" />
           <Projects />
        </div>

        <div className={`${toggleState === 4 ? "block" : "hidden"} p-4 rounded-lg`}>
          <hr className="my-2" />
          <Contact />
        </div>

        <div className={`${toggleState === 5 ? "block" : "hidden"} p-4 rounded-lg`}>
          <hr className="my-2" />
          
             
        </div>

        <div className={`${toggleState === 6 ? "block" : "hidden"} p-4 rounded-lg`}>
          <hr className="my-2" />
           <Meetings />
        </div>
        <div className={`${toggleState === 7 ? "block" : "hidden"} p-4 rounded-lg`}>
          <hr className="my-2" />
          <Downloads />
        </div>
        <div className={`${toggleState === 8 ? "block" : "hidden"} p-4 rounded-lg`}>
          <hr className="my-2" />
          <Helplines />
        </div>
      </div>
    </div>
  );
};

export default Tab;
