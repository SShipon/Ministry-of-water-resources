/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeartbeat, faChild, faSeedling, faPhone, faAmbulance, faBolt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const helplineData = [
  { name: "দুর্যোগ ব্যবস্থাপনা ও বন্যা সতর্কীকরণ", number: "১০৯০", },
  { name: "স্বাস্থসেবা", number: "১৬২৬৩", icon: faHeartbeat },
  { name: "মহিলা ও শিশু বিষয়ক", number: "১০৯", icon: faChild },
  { name: "কৃষি বিষয়ক তথ্য", number: "১৬১২৩", icon: faSeedling },
  { name: "জাতীয় হেল্পলাইন", number: "৩৩৩", icon: faPhone },
  { name: "জাতীয় জরুরী সেবা", number: "৯৯৯", icon: faAmbulance },
  { name: "বিদ্যুৎ অভিযোগ", number: "১৬৯৯৯", icon: faBolt },
  { name: "ভোক্তা অধিকার সংরক্ষণ", number: "১৬১২১", icon: faShieldAlt }
];

const Helplines = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {helplineData.map((item, index) => (
          <div key={index} className="p-4 border border-green-300 rounded-lg hover:shadow-lg transition-shadow duration-300 flex items-center">
            <FontAwesomeIcon icon={item.icon} className="text-2xl text-green-600 mr-3" />
            <div>
              <h2 className="text-base font-semibold mb-2">{item.name}</h2>
              <p className="text-lg font-bold ">{item.number}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Helplines;
