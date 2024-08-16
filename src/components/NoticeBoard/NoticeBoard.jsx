import { FaBell, FaFileAlt, FaUserTie } from 'react-icons/fa';
import PrimeMinister from './PrimeMinister';
import UpdatedNews from './UpdatedNews';
import EndNews from './EndNews';


const NoticeBoard = () => {
    return (
        <div className='container mx-auto p-4 flex lg:flex-row flex-col w-full justify-center items-center'>
            <div 
                className='bg-opacity-70 p-4 lg:w-1/2 ' >
                 <div>
                 <h2 className="text-xl font-bold mb-4">নোটিশ বোর্ড</h2>
                 {/* title add  */}
                <ul>
                    <li className="flex items-center mb-2">
                        <FaBell className="mr-2" /> <span className='text-sm'>অফিস আদেশ (সচিব মহোদয়ের রুটিন দায়িত্ব পালন)</span>
                    </li>
                    <li className="flex items-center mb-2">
                        <FaFileAlt className="mr-2" /> <span className='text-sm'>ই-নথি থেকে ডিজিটাল নথি/ডি-নথিতে মাইগ্রেশন প্রসঙ্গে।</span>
                    </li>
                    <li className="flex items-center mb-2">
                        <FaUserTie className="mr-2" /> <span className='text-sm'>অফিস আদেশ (সচিব মহোদয়ের রুটিন দায়িত্ব পালন)</span>
                    </li>
                    <li className="flex items-center mb-2">
                        <FaFileAlt className="mr-2" /> <span className='text-sm'>অফিস আদেশ (সচিব মহোদয়ের রুটিন দায়িত্ব পালন)</span>
                    </li>
                    <li className="flex items-center mb-2">
                        <FaBell className="mr-2" /><span className='text-sm'> নিয়োগ পত্রঃ পানি সম্পদ মন্ত্রণালয়ের কম্পিউটার অপারেটর, সাঁট মুদ্রাক্ষরিক কাম কম্পিউটা...</span>
                    </li>
                </ul>
                
                 </div>
                 <br />
                 <EndNews />
                 <br />
                 <UpdatedNews />
            </div>
            <div className='lg:w-1/2 w-full'>
              <PrimeMinister />
            </div>
        </div>
    );
};

export default NoticeBoard;

