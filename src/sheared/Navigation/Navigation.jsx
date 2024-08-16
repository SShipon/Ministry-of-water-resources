// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../components/context/ThemeContext";
import './navigation.css'
const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <a href="#">বাংলাদেশ জাতীয় তথ্য বাতায়ন</a>
        </div>

        {/* Dropdown Menu */}
        <div className="relative">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
          {menuOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <li className="p-2 hover:bg-blue-200">
                <a href="#">Menu Item 1</a>
              </li>
              <li className="p-2 hover:bg-blue-200">
                <a href="#">Menu Item 2</a>
              </li>
              <li className="p-2 hover:bg-blue-200">
                <a href="#">Menu Item 3</a>
              </li>
            </ul>
          )}
        </div>

        {/* Search and Language Dropdown */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              className="px-4 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Search"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600">
              🔍
            </button>
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              className="text-white focus:outline-none"
              onClick={() => setLanguageOpen(!languageOpen)}
            >
              Language
            </button>
            {languageOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg">
                <li className="p-2 hover:bg-blue-200">
                  <a href="#">বাংলা</a>
                </li>
                <li className="p-2 hover:bg-blue-200">
                  <a href="#">English</a>
                </li>
              </ul>
            )}
          </div>

          {/* Button */}
          <div className="">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={toggle} checked={mode === "dark"} />
            <svg className="swap-on fill-current w-10 h-10 px-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
