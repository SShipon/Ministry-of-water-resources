import img1 from "../../../assets/img/e-directory.jpg";
import img2 from "../../../assets/img/internal_eservice2.gif";
import img3 from "../../../assets/img/National-portal_bn.gif";
import facebook from '../../../assets/img/facebook (3).png'
import nationalSong from '../../../assets/audio/bd_national_anthem.mp3'
import { FaHandPointRight } from "react-icons/fa";
import { CheckIcon } from "lucide-react";


const Sidebar = () => {
  return (
    <div className="p-4">
      <div className="">
        <div className="py-1">
        <button className="btn w-full   py-2 px-4 rounded hover:bg-purple-500 hover:text-white">
  কেন্দ্রীয় ই-সেবাসমূহ
</button>
        </div>
        <div className="py-2">
        
          <button className="btn w-full   py-2 px-4 rounded hover:bg-purple-500 hover:text-white">
          অভ্যন্তরীণ ই-সেবাসমূহ
</button>
        </div>
      </div>

      <div className="text-left my-4">
        <a
          href=""
          className="flex items-center space-x-2 hover:underline hover:text-purple-700"
        >
          <FaHandPointRight className="text-purple-400" />
          <p>ওয়েবমেইল</p>
        </a>
        <a
          href=""
          className="flex items-center space-x-2 hover:underline hover:text-purple-700"
        >
          <FaHandPointRight className="text-purple-400" />
          <p>অভিযোগ প্রতিকার ব্যবস্থা</p>
        </a>
        <a
          href=""
          className="flex items-center space-x-2 hover:underline hover:text-purple-700"
        >
          <FaHandPointRight className="text-purple-400" />
          <p>Knowledge Repository</p>
        </a>
        <a
          href=""
          className="flex items-center space-x-2 hover:underline hover:text-purple-700"
        >
          <FaHandPointRight className="text-purple-400" />
          <p>e-Requisition</p>
        </a>
        <a
          href=""
          className="flex items-center space-x-2 hover:underline hover:text-purple-700"
        >
          <FaHandPointRight className="text-purple-400" />
          <p>Online Pay Bill</p>
        </a>
        <a
          href=""
          className="flex items-center space-x-2 hover:underline hover:text-purple-700"
        >
          <FaHandPointRight className="text-purple-400" />
          <p>মতামত / পরামর্শ</p>
        </a>
      </div>

      <div className="py-2">
        <button className="btn w-full   py-2 px-4 rounded hover:bg-purple-500 hover:text-white">সকল</button>
      </div>
      
     <div className="py-4">
     <div className="flex flex-col gap-y-4">
         <div><img src={img1} alt="" /></div>
        <div> <img src={img2} alt="" /></div>
         <div><img src={img3} alt="" /></div>
      </div>
     </div>

      <div>
        <div className="py-4">
          <h4 className="bg-purple-400 p-2 text-sm hover:cursor-pointer">সরকারি কর্মচারী ব্যবস্থাপনা পদ্ধতি (GEMS)</h4>
          <p className="text-sm pt-3 hover:underline hover:text-purple-700 hover:cursor-pointer">সরকারি কর্মচারী ব্যবস্থাপনা পদ্ধতি (GEMS)</p>
        </div>
        <div>
        <h4 className="bg-purple-400 p-2 text-sm hover:cursor-pointer">সামাজিক যোগাযোগ</h4>
        <div className="py-2">
         <a href=""> <img className="w-[40px]" src={facebook} alt="" /></a>
        </div>
        </div>
        <div>
          <h4 className="bg-purple-400 p-2 my-2  text-sm">জাতীয় সংগীত</h4>
          <div className="audio-container flex justify-center items-center ">
      <audio  controls className="audio-player lg:-ml-4 lg:p-1 bg-green-200  lg:w-[250px] rounded-3xl">
        <source src={nationalSong} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
     
     <div className="my-4">
     <h4 className="bg-purple-400 p-2 text-sm hover:cursor-pointer">ইনোভেশন কর্নার</h4> 
     <div className="text-left flex items-center space-x-2 py-4">
      <CheckIcon className="h-5 w-5 text-green-500" />
      <p>ইনোভেশন টিম</p>
    </div>
     </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
