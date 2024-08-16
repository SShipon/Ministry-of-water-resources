import { FaBell, FaFileAlt, FaUserTie } from 'react-icons/fa';


const NoticeBoard = () => {
    return (
        <div className='container mx-auto p-4 flex'>
            <div 
                className='bg-opacity-70 p-4 w-2/3'  
                
            >
                <h2 className="text-xl font-bold mb-4">নোটিশ বোর্ড</h2>
                <ul>
                    <li className="flex items-center mb-2">
                        <FaBell className="mr-2" /> অফিস আদেশ (সচিব মহোদয়ের রুটিন দায়িত্ব পালন)
                    </li>
                    <li className="flex items-center mb-2">
                        <FaFileAlt className="mr-2" /> ই-নথি থেকে ডিজিটাল নথি/ডি-নথিতে মাইগ্রেশন প্রসঙ্গে।
                    </li>
                    <li className="flex items-center mb-2">
                        <FaUserTie className="mr-2" /> অফিস আদেশ (সচিব মহোদয়ের রুটিন দায়িত্ব পালন)
                    </li>
                    <li className="flex items-center mb-2">
                        <FaFileAlt className="mr-2" /> অফিস আদেশ (সচিব মহোদয়ের রুটিন দায়িত্ব পালন)
                    </li>
                    <li className="flex items-center mb-2">
                        <FaBell className="mr-2" /> নিয়োগ পত্রঃ পানি সম্পদ মন্ত্রণালয়ের কম্পিউটার অপারেটর, সাঁট মুদ্রাক্ষরিক কাম কম্পিউটা...
                    </li>
                </ul>
            </div>
            <div className='w-1/3'>
                {/* Additional content or empty space */}
            </div>
        </div>
    );
};

export default NoticeBoard;

