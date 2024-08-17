
import { ImageSlider, } from "./ImageSlider"; // Assuming ImageSliderProps is exported from ImageSlider.tsx

// Define the interface for each image object

// Define your IMAGES array using the Image interface
const IMAGES = [
  
  { url: "https://i.ibb.co/qDYQXn2/images-3.jpg", alt: "beach",   title: "বিশুদ্ধ পানি সরবরাহের উদ্যোগ",  description: "পানি উন্নয়ন বোর্ডের মাধ্যমে বিশুদ্ধ ও নিরাপদ পানির সরবরাহ নিশ্চিত করা হচ্ছে।" },
  { url: "https://i.ibb.co/L6KMy0J/images1.jpg", alt: "boat",  title: "নদী ও জলাশয় উন্নয়ন" , description: "নদী ও জলাশয়ের উন্নয়নে বিভিন্ন প্রকল্প পরিচালিত হচ্ছে।"},
  { url: " https://i.ibb.co/B2JJWhP/download-4.jpg", alt: "forest",  title: "সেচ প্রকল্প বাস্তবায়ন" , description: "কৃষিক্ষেত্রে উৎপাদনশীলতা বৃদ্ধির লক্ষ্যে সেচ প্রকল্প বাস্তবায়ন করা হচ্ছে।" },
  { url: " https://i.ibb.co/NSddyrB/images-2.jpg", alt: "city", title: "বন্যা প্রতিরোধ ব্যবস্থা", description: "বন্যা প্রতিরোধে নির্মিত বাঁধ ও অন্যান্য প্রতিরোধমূলক ব্যবস্থার উন্নয়ন।" },
 
];

export default function SliderBanner() {
  return (
    <div
      style={{
        maxWidth: "1100px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
    </div>
  );
}
