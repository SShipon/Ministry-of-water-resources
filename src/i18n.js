import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to the Bangladesh National Portal",
      officeType: "Office Type",
      ministry: "Ministry / Department",
      divisional: "Divisional / Portal",
      district: "District / Portal",
      upazila: "Upazila / Portal",
      union: "Union / Portal",
      others: "Others",
      search: "Search",
      language: "Language",




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
      welcome: "বাংলাদেশ জাতীয় তথ্য বাতায়ন ",
      officeType: "অফিসের ধরণ",
      ministry: "মন্ত্রণালয় / বিভাগ",
      divisional: "বিভাগীয় / বাতায়ন",
      district: "জেলা / বাতায়ন",
      upazila: "উপজেলা / বাতায়ন",
      union: "ইউনিয়ন / বাতায়ন",
      others: "অন্যান্য",
      search: "খুঁজুন",
      language: "ভাষা",


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
