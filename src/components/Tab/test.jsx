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

  const tabClasses = (index) => {
    const baseClasses = "flex-1 p-4 text-center cursor-pointer transition-colors duration-300";
    const activeClasses = "border-b-2 border-blue-500 text-white";
    const inactiveClasses = "border-b-2 border-transparent";
    
    const colors = [
      "bg-teal-400 text-teal-800",    // MinistryRelated
      "bg-purple-400 text-purple-800", // SubOrganizations
      "bg-green-400 text-green-800",  // Projects
      "bg-yellow-400 text-yellow-800", // Contact
      "bg-red-400 text-red-800",       // Gallery
      "bg-blue-400 text-blue-800",     // Meetings
      "bg-orange-400 text-orange-800", // Downloads
      "bg-indigo-400 text-indigo-800"  // Helplines
    ];

    return `${baseClasses} ${toggleState === index ? activeClasses : inactiveClasses} ${colors[index - 1]} ${toggleState !== index ? "hover:bg-opacity-80" : ""}`;
  };

  return (
    <div id="portfolio" className="container mx-auto p-4">
      <h3 className="text-3xl font-extrabold text-center my-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400">
        {/* Heading goes here */}
      </h3>
      <div className="flex mb-4 justify-center items-center">
        <p className="text-4xl"><FaHome /></p>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <button
            key={index}
            className={tabClasses(index)}
            onClick={() => toggleTab(index)}
          >
            <span className="text-xs lg:text-lg">
              {index === 1 && "মন্ত্রণালয় সম্পর্কিত"}
              {index === 2 && "অধীনস্থ সংস্থাসমূহ"}
              {index === 3 && "প্রকল্প"}
              {index === 4 && "যোগাযোগ"}
              {index === 5 && "গ্যালারী"}
              {index === 6 && "সভা সংক্রান্ত"}
              {index === 7 && "ডাউনলোড"}
              {index === 8 && "হেল্পলাইনসমূহ"}
            </span>
          </button>
        ))}
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
          {/* Gallery content goes here */}
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
