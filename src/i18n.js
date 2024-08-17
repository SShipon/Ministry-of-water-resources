/* eslint-disable no-dupe-keys */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      pageTitle:'Ministry of water resources',
      //navbar design 
      welcome: "Ministry of Water Resources",
      officeType: "Office Type",
      ministry: "Ministry / Department",
      divisional: "Divisional / Portal",
      district: "District / Portal",
      upazila: "Upazila / Portal",
      union: "Union / Portal",
      others: "Others",
      search: "Search",
      language: "Language",


      //banner design 

      title1: "Safe Water Supply Initiative",
      desc1: "Ensuring the supply of pure and safe water through the Water Development Board.",
      title2: "River and Waterbody Development",
      desc2: "Various projects are being implemented for the development of rivers and waterbodies.",
      title3: "Irrigation Project Implementation",
      desc3: "Irrigation projects are being implemented to increase productivity in agriculture.",
      title4: "Flood Prevention Measures",
      desc4: "Development of embankments and other preventive measures for flood control.",
      exploreMore: "Explore More",

       // footer design add
      support: "Support",
      support_hours: "Available from 10:00 AM to 5:00 PM",
      store_locator: "location details",
      quick_link: "Quick Link",
      upcoming_live_batch: "Home",
      live_workshop: "About Us",
      travel_blog_guide: "Services",
      community_stay_connected: "Stay Connected with the Community.",
      help_center: "Help Center",
      contacts: "Contacts",
      phone: "Phone",
      email: "goveInfo@gmail.com",
      address: "Address Dhaka Bangladesh",
      available_time: "Available : 09:00 AM to 5:00 PM",
      contact_us: "Contact Us",
      details_center: "Ministry of Water Resources",
      content:"This ministry works on water management and formulating water-related policies. We are committed to ensuring safe and adequate water for everyone",
      webSiteCreate:'develop_by shipon ©2024 all_rights_reserved',
      follow_us:"Follow Us"
    }  },
  bn: {
    translation: {
      pageTitle:'পানি সম্পদ মন্ত্রণালয়',
      // navbar design 
      welcome: "পানি সম্পদ মন্ত্রণালয়",
      officeType: "অফিসের ধরণ",
      ministry: "মন্ত্রণালয় / বিভাগ",
      divisional: "বিভাগীয় / বাতায়ন",
      district: "জেলা / বাতায়ন",
      upazila: "উপজেলা / বাতায়ন",
      union: "ইউনিয়ন / বাতায়ন",
      others: "অন্যান্য",
      search: "খুঁজুন",
      language: "ভাষা",
 //banner design 
      title1: "বিশুদ্ধ পানি সরবরাহের উদ্যোগ",
      desc1: "পানি উন্নয়ন বোর্ডের মাধ্যমে বিশুদ্ধ ও নিরাপদ পানির সরবরাহ নিশ্চিত করা হচ্ছে।",
      title2: "নদী ও জলাশয় উন্নয়ন",
      desc2: "নদী ও জলাশয়ের উন্নয়নে বিভিন্ন প্রকল্প পরিচালিত হচ্ছে।",
      title3: "সেচ প্রকল্প বাস্তবায়ন",
      desc3: "কৃষিক্ষেত্রে উৎপাদনশীলতা বৃদ্ধির লক্ষ্যে সেচ প্রকল্প বাস্তবায়ন করা হচ্ছে।",
      title4: "বন্যা প্রতিরোধ ব্যবস্থা",
      desc4: "বন্যা প্রতিরোধে নির্মিত বাঁধ ও অন্যান্য প্রতিরোধমূলক ব্যবস্থার উন্নয়ন।",
      exploreMore: "আরও জানুন",

      // footer design add
       support: "সহায়তা",
       support_hours: "সকাল ১০:০০ থেকে বিকাল ৫:০০ পর্যন্ত",
       store_locator: "অবস্থানের বিবরণ",
       quick_link: "উপকারি লিংক",
       upcoming_live_batch: "মূল পাতা",
       live_workshop: "আমাদের সম্পর্কে",
       travel_blog_guide: "সেবা সমূহ",
       community_stay_connected: "সম্প্রদায়ের সাথে সংযুক্ত থাকুন।",
       help_center: "সাহায্য কেন্দ্র সব সহায়তা",
       contacts: "যোগাযোগ",
       phone: "ফোন: +৮৮ ০২ ৯৮৭৬৫৪৩",
       email: "goveInfo@gmail.com",
       address: "ঠিকানা: ঢাকা, বাংলাদেশ",
       available_time: "উপলব্ধ: সকাল ৯:০০ থেকে বিকাল ৫:০০ পর্যন্ত",
       contact_us: "যোগাযোগ করুন",
       details_center: "পানি সম্পদ মন্ত্রণালয়",
       content:'পানির ব্যবস্থাপনা এবং পানি সংক্রান্ত নীতিমালা প্রণয়নের জন্য এই মন্ত্রণালয় কাজ করে। আমরা সবার জন্য নিরাপদ ও পর্যাপ্ত পানি নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।  ',
       webSiteCreate:'ডেভেলপড বাই শিপন ©২০২৪ সমস্ত অধিকার সংরক্ষিত',
       follow_us:'আমাদের অনুসরণ করুন'
      
    },


  
   
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'bn', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
