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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
    setDropdownOpen(false); // Close dropdown after selecting a tab
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div id="portfolio" className="container mx-auto p-4">
      <h3 className="text-3xl font-extrabold text-center my-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400">
        {/* Add your heading text here */}
      </h3>

      {/* Dropdown Menu for Mobile Devices */}
      <div className="relative mb-4 md:hidden">
        <button
          className="flex justify-center items-center w-full p-4 bg-gray-200 text-lg font-semibold text-gray-700 rounded-md"
          onClick={toggleDropdown}
        >
          <FaHome className="mr-2" />
          Menu
        </button>

        {dropdownOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white border rounded-md shadow-lg z-10">
            <button
              className={`w-full p-4 text-left ${
                toggleState === 1 ? "bg-purple-300" : ""
              }`}
              onClick={() => toggleTab(1)}
            >
              মন্ত্রণালয় সম্পর্কিত
            </button>
            <button
              className={`w-full p-4 text-left ${
                toggleState === 2 ? "bg-purple-300" : ""
              }`}
              onClick={() => toggleTab(2)}
            >
              অধীনস্থ সংস্থাসমূহ
            </button>
            <button
              className={`w-full p-4 text-left ${
                toggleState === 3 ? "bg-blue-100" : ""
              }`}
              onClick={() => toggleTab(3)}
            >
              প্রকল্প
            </button>
            <button
              className={`w-full p-4 text-left ${
                toggleState === 4 ? "bg-blue-100" : ""
              }`}
              onClick={() => toggleTab(4)}
            >
              যোগাযোগ
            </button>
            <button
              className={`w-full p-4 text-left ${
                toggleState === 5 ? "bg-blue-100" : ""
              }`}
              onClick={() => toggleTab(5)}
            >
              গ্যালারী
            </button>
            <button
              className={`w-full p-4 text-left ${
                toggleState === 6 ? "bg-blue-100" : ""
              }`}
              onClick={() => toggleTab(6)}
            >
              সভা সংক্রান্ত
            </button>
            <button
              className={`w-full p-4 text-left ${
                toggleState === 7 ? "bg-blue-100" : ""
              }`}
              onClick={() => toggleTab(7)}
            >
              ডাউনলোড
            </button>
            <button
              className={`w-full p-4 text-left ${
                toggleState === 8 ? "bg-blue-100" : ""
              }`}
              onClick={() => toggleTab(8)}
            >
              হেল্পলাইনসমূহ
            </button>
          </div>
        )}
      </div>

      {/* Tab Menu for Larger Devices */}
      <div className="hidden md:flex mb-4 justify-center items-center">
        <p className="text-4xl">
          <FaHome />
        </p>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 1
              ? "border-b-2 border-blue-500 bg-purple-300 rounded-sm"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(1)}
        >
          <span className="text-xs lg:text-lg text-purple-500">
            মন্ত্রণালয় সম্পর্কিত
          </span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 2
              ? "border-b-2 border-blue-500 bg-purple-300"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(2)}
        >
          <span className="text-xs lg:text-lg">অধীনস্থ সংস্থাসমূহ</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 3
              ? "border-b-2 border-blue-500 bg-blue-100"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(3)}
        >
          <span className="text-xs lg:text-lg">প্রকল্প</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 4
              ? "border-b-2 border-blue-500 bg-blue-100"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(4)}
        >
          <span className="text-xs lg:text-lg">যোগাযোগ</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 5
              ? "border-b-2 border-blue-500 bg-blue-100"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(5)}
        >
          <span className="text-xs lg:text-lg">গ্যালারী</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 6
              ? "border-b-2 border-blue-500 bg-blue-100"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(6)}
        >
          <span className="text-xs lg:text-lg">সভা সংক্রান্ত</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 7
              ? "border-b-2 border-blue-500 bg-blue-100"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(7)}
        >
          <span className="text-xs lg:text-lg">ডাউনলোড</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 8
              ? "border-b-2 border-blue-500 bg-blue-100"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(8)}
        >
          <span className="text-xs lg:text-lg">হেল্পলাইনসমূহ</span>
        </button>
      </div>

      {/* Content Section */}
      <div className="flex-grow">
        {toggleState === 1 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            <MinistryRelated />
          </div>
        )}

        {toggleState === 2 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            <SubOrganizations />
          </div>
        )}

        {toggleState === 3 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            <Projects />
          </div>
        )}

        {toggleState === 4 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            <Contact />
          </div>
        )}

        {toggleState === 5 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            {/* Add Gallery component here */}
          </div>
        )}

        {toggleState === 6 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            <Meetings />
          </div>
        )}

        {toggleState === 7 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            <Downloads />
          </div>
        )}

        {toggleState === 8 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            <Helplines />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
