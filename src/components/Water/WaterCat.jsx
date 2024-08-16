import Water from "./Water";

const WaterCat = () => {
  return (
    <div className="container mx-auto p-4 ">
      <div className="flex lg:flex-row flex-col">
      <div className="lg:w-1/2 w-full">
        <h3 className="lg:text-2xl text-base font-bold">পানি, আমাদের জীবনের প্রধান উৎস।</h3>
        <br />
         
           <p className="text-sm text-justify pr-10 ">
         প্রতিটি জীবের বেঁচে থাকার জন্য এটি
        অপরিহার্য। পানি আমাদের পরিবেশকে সুস্থ ও সমৃদ্ধ রাখে। মানুষ নদী বা পুকুর
        থেকে পানি নিচ্ছে। শিশুরা পানিতে খেলা করছে, কেউ একজন কল থেকে পানি নিচ্ছে,
        গৃহিণী রান্নাঘরে পানি ব্যবহার করছে প্রতিদিনের জীবনে আমরা নানা কাজে পানি
        ব্যবহার করি। পানীয় হিসেবে, রান্নায়, কৃষিকাজে, এমনকি আমাদের দৈনন্দিন
        জীবনের প্রতিটি ক্ষেত্রে পানির ভূমিকা অপরিসীম। একজন কৃষক ক্ষেতে পানি সেচ
        দিচ্ছে, একটি গ্রামে একটি কল থেকে মানুষ পানি সংগ্রহ করছে কিন্তু পৃথিবীর
        পানি সম্পদ সীমিত। তাই আমাদের উচিত পানির প্রতিটি ফোঁটা সঠিকভাবে ব্যবহার
        করা এবং সংরক্ষণ করা। মানুষ বোতলে পানি পান করছে, শিশুরা একে অপরের মধ্যে
        পানি ভাগাভাগি করছে সুস্থ জীবনের জন্য পরিচ্ছন্ন পানি অপরিহার্য। আসুন,
        আমরা সবাই মিলে আমাদের পানি সম্পদ সংরক্ষণ করি এবং ভবিষ্যত প্রজন্মের জন্য
        একটি সুন্দর পৃথিবী গড়ে তুলি। একটি সবুজ মাঠের ওপর দিয়ে নদী বয়ে যাচ্ছে,
        পানিতে সূর্যের প্রতিফলন হচ্ছে পানি, জীবন। আসুন, পানির সঠিক ব্যবহার
        নিশ্চিত করি।
      </p>
           
      </div>
        <div className="lg:w-1/2 w-full lg:my-0 my-4">
          <Water />
        </div>
       
      </div>
    </div>
  );
};

export default WaterCat;
