/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const data = {
  organizations: [
    "বাংলাদেশ পানি উন্নয়ন বোর্ড",
    "নদী গবেষণা ইনস্টিটিউট",
    "যৌথ নদী কমিশন",
    "বাংলাদেশ হাওর ও জলাভূমি উন্নয়ন অধিদপ্তর",
    "পানি সম্পদ পরিকল্পনা সংস্থা"
  ],
  trusts: [
    "ইনষ্টিটিউট অব ওয়াটার মডেলিং",
    "সিইজিআইএস"
  ]
};

const SubOrganizations = () => {
  const [showMoreOrganizations, setShowMoreOrganizations] = useState(false);
  const [showMoreTrusts, setShowMoreTrusts] = useState(false);

  const toggleOrganizations = () => setShowMoreOrganizations(!showMoreOrganizations);
  const toggleTrusts = () => setShowMoreTrusts(!showMoreTrusts);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-purple-600">সংস্থাসমূহ</h2>
          <ul>
            {(showMoreOrganizations ? data.organizations : data.organizations.slice(0, 3)).map((item, index) => (
              <li key={index} className="hover:text-purple-700 p-2 rounded">
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={toggleOrganizations}
            className="mt-2 text-purple-600 hover:text-purple-700"
          >
            {showMoreOrganizations ? "কম দেখুন" : "আরও দেখুন"}
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-purple-600">ট্রাস্টি প্রতিষ্ঠান</h2>
          <ul>
            {(showMoreTrusts ? data.trusts : data.trusts.slice(0, 1)).map((item, index) => (
              <li key={index} className="hover:text-purple-700 p-2 rounded">
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTrusts}
            className="mt-2 text-purple-600 hover:text-purple-700"
          >
            {showMoreTrusts ? "কম দেখুন" : "আরও দেখুন"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubOrganizations;
