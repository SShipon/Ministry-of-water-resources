/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ministryData = {
  introduction: {
    introduction: "মন্ত্রণালয়ের পরিচিত",
    history_and_functions: "ইতিহাস ও কার্যাবলী",
    vision_and_mission: "ভিশন ও মিশন",
    former_ministers_list: "প্রাক্তন মন্ত্রী/প্রতিমন্ত্রী/উপমন্ত্রীগণের তালিকা",
    secretary: "সচিব",
    former_secretaries_list: "প্রাক্তন সচিবগণের তালিকা",
    organogram: "অর্গানোগ্রাম",
    allocation_of_business: "এলোকেশন অব বিজনেস"
  },
  manpower: {
    officers_list: "কর্মকর্তাগণ",
    work_distribution: "কর্মবন্টন",
    information_officer: "তথ্য প্রদানকারী কর্মকর্তা",
    complaint_settlement_officer: "অভিযোগ নিষ্পত্তি কর্মকর্তা",
    appeal_officer: "আপীল কর্মকর্তা",
    focal_point_officers: "ফোকাল পয়েন্ট কর্মকর্তাগণ",
    secretary_office: "সচিবের দপ্তর",
    grade_10_officers: "১০ গ্রেডভূক্ত কর্মকর্তাগণ",
    administration: "প্রশাসন অনুবিভাগ",
    development: "উন্নয়ন অনুবিভাগ",
    budget_and_audit: "বাজেট ও অডিট",
    planning: "পরিকল্পনা অনুবিভাগ",
    reform_management_and_policy_research_unit: "রিফর্ম ম্যানেজমেন্ট এন্ড পলিসি রিসার্চ ইউনিট"
  },
  services: {
    ministry_services: "মন্ত্রণালয়ের সেবাসমূহ",
    citizen_charter: "সিটিজেন চার্টার",
    citizen_e_services_list: "নাগরিক ই-সেবাসমূহের তালিকা",
    other_services_list: "অন্যান্য সেবার তালিকা"
  },
  committees: {
    ministry_committees: "মন্ত্রণালয়ের কমিটিসমূহ",
    committees_related_to_pm_and_minister: "মাননীয় প্রধানমন্ত্রী এবং মাননীয় মন্ত্রীর সভাপতিত্বে/ মন্ত্রণালয়/বিভাগ সম্পর্কিত কমিটিসমূহ"
  }
};

const MinistryRelated = () => {
  const [visibleItems, setVisibleItems] = useState({}); // Track visibility for each category

  const toggleVisibility = (category) => {
    setVisibleItems((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const categories = Object.keys(ministryData);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category} className="p-4">
            <h2 className="text-lg font-semibold mb-2 text-purple-600">
              {category === 'introduction' && 'মন্ত্রণালয়ের পরিচিতি'}
              {category === 'manpower' && 'জনবল'}
              {category === 'services' && 'মন্ত্রণালয়ের সেবা সমূহ'}
              {category === 'committees' && 'মন্ত্রণালয়ের কমিটি সমূহ'}
            </h2>
            <ul>
              {Object.keys(ministryData[category])
                .slice(0, visibleItems[category] ? undefined : 3)
                .map((subKey) => (
                  <li
                    key={subKey}
                    className="p-2 hover:text-purple-700 transition-colors duration-300"
                  >
                    {ministryData[category][subKey]}
                  </li>
                ))}
            </ul>
            <button
              onClick={() => toggleVisibility(category)}
              className="mt-2 text-purple-600 hover:text-purple-700"
            >
              {visibleItems[category] ? "কম দেখুন" : "আরও দেখুন"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinistryRelated;
