import { Cursor, useTypewriter } from 'react-simple-typewriter';

const UpdatedNews = () => {
    const [text] = useTypewriter({
        words: [
            'সৈয়দা রিজওয়ানা হাসান মাননীয় প্রধান উপদেষ্টা পানি সম্পদ মন্ত্রণালয়',
            'বাপাউবোর মহাপরিচালক পদে চলতি দায়িত্ব প্রদান (জনাব মুহাম্মদ আমিরুল হক ) (২০২৪-০৩-১০)',
            'যোগদান পত্র (মোহাম্মদ হাবীবুর রহমান, যুগ্মসচিব) (২০২৪-০৫-০৮)'
        ],
        loop: 0,
        typeSpeed: 100,  // Adjust this value for slower typing (default is 50)
        deleteSpeed: 50,  // Adjust this value for slower deleting (default is 50)
        delaySpeed: 1500  // Adjust this value to control delay between words (default is 1500)
    });

    return (
        <div>
            <div className='border border-purple-500 p-1 flex justify-between items-center'>
                <div className='flex items-center'>
                    <h3>খবর:</h3>
                    <span className='text-gradient text-xs'>{text}</span>
                    <span className='text-base text-purple-600'>
                        <Cursor cursorStyle='//' />
                    </span>
                </div>
                <span className='bg-purple-500 p-1 rounded text-white'>সকল</span>
            </div>
        </div>
    );
};

export default UpdatedNews;
