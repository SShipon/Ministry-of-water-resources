/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import Subject from './Subject';
import { AuthContext } from '../../context/useContext';

const Subjects = () => {
    const { data } = useContext(AuthContext);
    const [visible, setVisible] = useState(9); // Initially show 9 cards
    const [showMore, setShowMore] = useState(false); // Track whether to show "Show More" or "Show Less" button

    const handleShowMore = () => {
        setVisible((prevVisible) => prevVisible + 19); // Show 3 more cards
        setShowMore(true); // Show "Show Less" button
    };

    const handleShowLess = () => {
        setVisible(9); // Reset to show the initial 9 cards
        setShowMore(false); // Show "Show More" button
    };

    return (
        <div className="p-4">
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {data.slice(0, visible).map(service => (
                    <Subject key={service.id} service={service} />
                ))}
            </div>
            {showMore ? (
                <div className="text-center mt-4">
                    <button 
                        onClick={handleShowLess} 
                        className="bg-gray-500 text-white py-2 px-4 rounded"
                    >
                        Show Less
                    </button>
                </div>
            ) : (
                visible < data.length && (
                    <div className="text-center mt-4">
                        <button 
                            onClick={handleShowMore} 
                            className="bg-purple-500 text-white py-2 px-4 rounded"
                        >
                            Show More
                        </button>
                    </div>
                )
            )}
        </div>
    );
};

export default Subjects;
