/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const projectData = {
  ongoing: [
    "পদ্মা সেতু প্রকল্প",
    "রূপপুর পারমাণবিক বিদ্যুৎ প্রকল্প",
    "মেট্রোরেল প্রকল্প",
    "আরেকটি চলমান প্রকল্প",
    "অন্য একটি চলমান প্রকল্প"
  ],
  completed: [
    "যমুনা সেতু প্রকল্প",
    "মোহাম্মদপুর বাস স্ট্যান্ড উন্নয়ন প্রকল্প",
    "ধানমন্ডি লেক পুনর্বাসন প্রকল্প",
    "অন্য একটি সমাপ্ত প্রকল্প",
    "আরেকটি সমাপ্ত প্রকল্প"
  ]
};

const Projects = () => {
  const [visibleOngoingItems, setVisibleOngoingItems] = useState(3);
  const [visibleCompletedItems, setVisibleCompletedItems] = useState(3);

  const handleShowMoreOngoing = () => {
    setVisibleOngoingItems((prev) => prev + 2);
  };

  const handleShowLessOngoing = () => {
    setVisibleOngoingItems(3);
  };

  const handleShowMoreCompleted = () => {
    setVisibleCompletedItems((prev) => prev + 2);
  };

  const handleShowLessCompleted = () => {
    setVisibleCompletedItems(3);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Ongoing Projects */}
        <div className="p-4">
          <h2 className="text-base font-semibold mb-2  text-emerald-400">চলমান প্রকল্পসমূহ</h2>
          <ul>
            {projectData.ongoing.slice(0, visibleOngoingItems).map((project, index) => (
              <li key={index} className="hover:bg-emerald-700 p-2 rounded">
                {project}
              </li>
            ))}
          </ul>
          {visibleOngoingItems < projectData.ongoing.length ? (
            <button
              onClick={handleShowMoreOngoing}
              className="mt-2 text-emerald-400 hover:bg-emerald-700"
            >
              আরও দেখুন
            </button>
          ) : (
            <button
              onClick={handleShowLessOngoing}
              className="mt-2 text-emerald-400 hover:bg-emerald-700"
            >
              কম দেখুন
            </button>
          )}
        </div>
        
        {/* Completed Projects */}
        <div className="p-4">
          <h2 className="text-base font-semibold mb-2 text-emerald-400">সমাপ্ত প্রকল্পসমূহ</h2>
          <ul>
            {projectData.completed.slice(0, visibleCompletedItems).map((project, index) => (
              <li key={index} className="hover:bg-emerald-700 p-2 rounded">
                {project}
              </li>
            ))}
          </ul>
          {visibleCompletedItems < projectData.completed.length ? (
            <button
              onClick={handleShowMoreCompleted}
              className="mt-2 text-emerald-400 hover:bg-emerald-700"
            >
              আরও দেখুন
            </button>
          ) : (
            <button
              onClick={handleShowLessCompleted}
              className="mt-2 text-emerald-400 hover:bg-emerald-700"
            >
           কম দেখুন
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
