import SyedaRizwana from '../../../assets/img/Syeda-Rizwana.jpg'
import nazmul from '../../../assets/img/nazmul.jpg'

const PrimeMinister = () => {
    return (
        <div className='my-8 container'>
             <div className="flex flex-col md:flex-row gap-4 ">
            <div className="guestCard flex flex-col w-full bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105">
              <h1 className="bg-[#C084FC] text-white text-center  font-semibold p-4">
                মাননীয় প্রধান উপদেষ্টা
              </h1>
              <div className="p-6 flex-grow">
                <img
                  className="w-[100px] md:w-[150px] mx-auto   shadow-md"
                  src={SyedaRizwana}
                  alt="Syeda Rizwana"
                />
                <div className="text-center mt-4">
                  <h2 className="font-bold text-gray-800">সৈয়দা রিজওয়ানা হাসান</h2>
                  <p className=" text-gray-600">মাননীয় প্রধান উপদেষ্টা</p>
                  <p>পানি সম্পদ মন্ত্রণালয়</p>
                </div>
              </div>
              <div className="p-6">
               <a href="https://mowr.gov.bd/site/office_head/7bdbbe42-217d-4729-97b8-45f6e49bedc4/%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4"> <button className="btn w-full   py-2 px-4 rounded hover:bg-purple-500 hover:text-white">
                  বিস্তারিত
                </button></a>
              </div>
            </div>

            <div className="guestCard flex flex-col w-full bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105">
              <h1 className="bg-[#C084FC] text-white text-center  font-semibold p-4">
                সিনিয়র সচিব
              </h1>
              <div className="p-6 flex-grow">
                <img
                  className="w-[100px] md:w-[150px] mx-auto shadow-md"
                  src={nazmul}
                  alt="Nazmul Hasan"
                />
                <div className="text-center mt-4">
                  <h2 className=" font-bold text-gray-800">
                  নাজমুল আহসান
                  </h2>
                  <h3 className=" text-gray-600">
                    সিনিয়র সচিব,
                  </h3>
                  <p>পানি সম্পদ মন্ত্রণালয়</p>
                </div>
              </div>
              <div className="p-6">
                <button className="btn w-full  py-2 px-4 rounded hover:bg-purple-500 hover:text-white">
                  বিস্তারিত
                </button>
              </div>
            </div>
          </div>
        </div>
    
        
    );
};

export default PrimeMinister;