/* eslint-disable react/prop-types */
import { FaImage, FaUserFriends, FaBuilding, FaFlag, FaBook } from "react-icons/fa";

const Subject = ({ service }) => {
    const { img, work, members, institute, ambition, title } = service;

    return (
        <div className="max-w-xs rounded-lg overflow-hidden border-2 border-purple-300  shadow-xl bg-custom-background flex flex-col items-center justify-between p-6">
            {/* Image or placeholder */}
            <div className="w-full h-32 flex items-center justify-center bg-gray-100">
                {img ? (
                    <img src={img} alt={title} className="h-full object-cover" />
                ) : (
                    <FaImage className="text-gray-400 text-6xl" />
                )}
            </div>

            {/* Title */}
            <h2 className="text-base font-bold my-4 text-center text-black">{title || "Untitled"}</h2>

            {/* Information container */}
            <div className="flex flex-col items-start w-full space-y-2">
                {/* Work */}
                <div className="flex items-center w-full">
                    <FaBook className="text-blue-500 mr-2" />
                    <span className="text-sm flex-1 text-left text-black hover:underline">{work || "No work specified"}</span>
                </div>

                {/* Members */}
                <div className="flex items-center w-full">
                    <FaUserFriends className="text-green-500 mr-2" />
                    <span className="text-sm flex-1 text-left text-black hover:underline">{members || "No members listed"}</span>
                </div>

                {/* Institute */}
                <div className="flex items-center w-full">
                    <FaBuilding className="text-red-500 mr-2" />
                    <span className="text-sm flex-1 text-left text-black hover:underline">{institute || "No institute provided"}</span>
                </div>

                {/* Ambition */}
                <div className="flex items-center w-full">
                    <FaFlag className="text-yellow-500 mr-2" />
                    <span className="text-sm flex-1 text-left text-black hover:underline">{ambition || "No ambition shared"}</span>
                </div>
            </div>
        </div>
    );
};

export default Subject;
