import { FaCheck } from "react-icons/fa";

const Gallery = () => {
  return (
    <div className="p-4">
      <div className="flex items-start mb-4">
        <FaCheck className="text-green-500 mr-2 text-xl" />
        <p>
          বিশুদ্ধ পানি সরবরাহের উদ্যোগ পানি উন্নয়ন বোর্ডের মাধ্যমে বিশুদ্ধ ও
          নিরাপদ পানির সরবরাহ নিশ্চিত করা হচ্ছে।
        </p>
      </div>
      <div className="flex items-start mb-4">
        <FaCheck className="text-green-500 mr-2 text-xl" />
        <p>
          নদী ও জলাশয় উন্নয়ন নদী ও জলাশয়ের উন্নয়নে বিভিন্ন প্রকল্প পরিচালিত
          হচ্ছে।
        </p>
      </div>
      <div className="flex items-start mb-4">
        <FaCheck className="text-green-500 mr-2 text-xl" />
        <p>
          সেচ প্রকল্প বাস্তবায়ন কৃষিক্ষেত্রে উৎপাদনশীলতা বৃদ্ধির লক্ষ্যে সেচ
          প্রকল্প বাস্তবায়ন করা হচ্ছে।
        </p>
      </div>
      <div className="flex items-start">
        <FaCheck className="text-green-500 mr-2 text-xl" />
        <p>
          বন্যা প্রতিরোধ ব্যবস্থা বন্যা প্রতিরোধে নির্মিত বাঁধ ও অন্যান্য
          প্রতিরোধমূলক ব্যবস্থার উন্নয়ন।
        </p>
      </div>
    </div>
  );
};

export default Gallery;
