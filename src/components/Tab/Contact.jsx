/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const contactData = [
  "যোগাযোগ",
  "অফিসের ঠিকানা",
  "সকল ফোকাল পয়েন্ট",
  "ইনোভেশন টিম",
  "অভিযোগ গ্রহণকারী কর্মকর্তা",
  "তথ্য প্রদানকারী কর্মকর্তা",
  "শুদ্ধাচার কৌশল ফোকাল পয়েন্ট",
  "বার্ষিক কর্মসম্পাদন চুক্তি (এপিএ) এর ফোকাল পয়েন্ট",
  "কল্যাণ কর্মকর্তা",
  "কাউন্সিল অফিসার/কাউন্সিল সহকারী",
  "জরুরী কাজের জন্য জেলাভিত্তিক ফোকাল পয়েন্ট",
  "অভিযোগ দাখিল",
  "লোকেশন ম্যাপ",
  "পরিছন্ন গ্রাম ফোকাল পয়েন্ট কর্মকর্তা",
  "বিভিন্ন সংস্থা ও কার্যক্রম বিষয়ে ফোকাল পয়েন্ট কর্মকর্তা",
  "ডেল্টা প্ল্যান বিষয়ক ফোকাল পয়েন্ট",
  "এসডিজি বিষয়ক ফোকাল পয়েন্ট কর্মকর্তা",
  "ব্লু-ইকোনমি ফোকাল পয়েন্ট",
  "জেলাভিত্তিক ফোকাল পয়েন্ট কর্মকর্তা",
  "বিভিন্ন মন্ত্রণালয়ে সভা, সেমিনার যোগদানের জন্য প্রতিনিধি",
  "মতামত",
  "আপনার জিজ্ঞাসা ও মতামত"
];

const Contact = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = () => {
    setVisibleItems(contactData.length);
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setVisibleItems(6);
    setIsExpanded(false);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {contactData.slice(0, visibleItems).map((item, index) => (
          <div key={index} className="p-4 transition-colors duration-300">
            <h2 className="text-base font-semibold">{item}</h2>
          </div>
        ))}
      </div>
      <div className="mt-4">
        {!isExpanded ? (
          <button
            onClick={handleShowMore}
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            আরও দেখুন
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            কম দেখান
          </button>
        )}
      </div>
    </div>
  );
};

export default Contact;
