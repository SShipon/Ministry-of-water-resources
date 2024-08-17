/* eslint-disable no-unused-vars */
import React from 'react';

const downloadsData = [
  { name: "ফরমসমূহ/চেকলিস্ট/ছক", link: "/path-to-form.pdf" },
  { name: "স্মরণিকা (বিশ্ব পানি দিবস ২০২৩)", link: "/path-to-publication-2023.pdf" },
  { name: "স্মরণিকা (বিশ্ব পানি দিবস ২০২৪)", link: "/path-to-publication-2024.pdf" },
  { name: "প্রকাশনাসমূহ", link: "/path-to-publications.pdf" }
];

const Downloads = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {downloadsData.map((item, index) => (
          <div key={index} className="p-4  border border-purple-500 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-base font-semibold mb-2">{item.name}</h2>
            <a
              href={item.link}
              download
              className="text-purple-500 hover:text-purple-700"
            >
              ডাউনলোড করুন
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Downloads;
