/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../components/context/ThemeContext";
import "./navigation.css";
import logo from '../../assets/img/logo.png';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { toggle, mode } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageOpen(false); // Close the dropdown after selection
  };

  return (
    <nav className="bg-background-nav py-2  fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white flex justify-center items-center">
          <img className="px-2 hidden w-[60px] lg:block" src={logo} alt="" />
          <a className="text-1xl font-bold hidden lg:block" href="#">
            {t('welcome')}
          </a>
        </div>

        {/* Menu button for mobile view */}
        <div className="block md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex items-center space-y-4 md:space-y-0 md:space-x-4`}
        >
          {/* Other menu items */}
          <label className="form-control w-full -mt-3 md:w-auto">
            <div className="label"></div>
            <select className="select select-bordered text-black  w-full md:w-auto">
              <option selected>{t('officeType')}</option>
              <option>{t('ministry')}</option>
              <option>{t('divisional')}</option>
              <option>{t('district')}</option>
              <option>{t('upazila')}</option>
              <option>{t('union')}</option>
              <option>{t('others')}</option>
            </select>
          </label>

          {/* Search Input */}
          <label className="input input-bordered flex items-center text-black gap-2 w-full md:w-auto">
            <input
              type="text"
              className="grow w-full md:w-auto text-black"
              placeholder={t('search')}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          {/* Language and Theme Toggle */}
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* Language Dropdown */}
            <div className="relative w-full md:w-auto">
              <button
                className="text-white focus:outline-none -ml-12 lg:-ml-0 w-full md:w-auto mt-4 md:mt-0"
                onClick={() => setLanguageOpen(!languageOpen)}
              >
                {t('language')}
              </button>
              {languageOpen && (
                <ul className="absolute right-0 z-10 mt-2 w-32 bg-white text-black rounded-md shadow-lg">
                  <li
                    className="p-2 hover:bg-blue-200"
                    onClick={() => changeLanguage('bn')}
                  >
                    বাংলা
                  </li>
                  <li
                    className="p-2 hover:bg-blue-200"
                    onClick={() => changeLanguage('en')}
                  >
                    English 
                  </li>
                </ul>
              )}
            </div>

            {/* Theme Toggle Button */}
            <div className="ml-4 mt-4 md:mt-0">
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  onChange={toggle}
                  checked={mode === "dark"}
                />
                <svg
                  className="swap-on fill-current w-10 h-10 px-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-off fill-current w-10 text-white h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
