/* eslint-disable no-unused-vars */
import React from 'react';
 import image1 from '../../../assets/img/logo/download(01).png'
 import image2 from '../../../assets/img/logo/download(0).png'
 import image3 from '../../../assets/img/logo/download (2).png'
 import image4 from '../../../assets/img/logo/download (3).png'
 import image5 from '../../../assets/img/logo/download (4).png'
 import image6 from '../../../assets/img/logo/download (5).png'
 import image7 from '../../../assets/img/logo/download (6).png'
 import image8 from '../../../assets/img/logo/download (7).png'
 import image9 from '../../../assets/img/logo/download (8).png'
 import image10 from '../../../assets/img/logo/download (9).png'
 import image11 from '../../../assets/img/logo/download (10).png'
 import image12 from '../../../assets/img/logo/download (11).png'
 import image13 from '../../../assets/img/logo/download (12).png'
 import image14 from '../../../assets/img/logo/download (13).png'
 import image15 from '../../../assets/img/logo/download (14).png'
 import image16 from '../../../assets/img/logo/download (16).png'
 import image17 from '../../../assets/img/logo/download (17).png'

const helplineData = [
  {id:1, icon: image1, },
  {id:2, icon: image2, },
  {id:3, icon: image3, },
  {id:4, icon: image4, },
  {id:5, icon: image5, },
  {id:6, icon: image6, },
  {id:7, icon: image7, },
  {id:8, icon: image8, },
  {id:9, icon: image9, },
  {id:10, icon: image10, },
  {id:11, icon: image11, },
  {id:12, icon: image12, },
  {id:13, icon: image13, },
  {id:14, icon: image14, },
  {id:15, icon: image15, },
  {id:16, icon: image16, },
  {id:17, icon: image16, },
  

  
];

const Help = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {helplineData.map((item, index) => (
          <div key={index} className="p-4 border-2 border-purple-300 rounded-lg hover:shadow-lg transition-shadow duration-300 flex items-center">
            <div>
             <img src={item.icon} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;