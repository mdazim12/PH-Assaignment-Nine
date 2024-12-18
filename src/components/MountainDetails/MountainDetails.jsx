import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const MountainDetails = () => {
    const MountainData = useLoaderData();
    const { id } = useParams();
    const mountain = MountainData.find(items => items.id == id);

    const {
        adventure_title,
        image,
        category_name,
        short_description,
        location,
        included_items,
        adventure_cost,
        duration,
        adventure_level,
        max_group_size,
        special_instructions,
        booking_availability
    } = mountain;

    const [showModal, setShowModal] = useState(false);

    const handleExpertButton = () => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        const startHours = 10;
        const endHours = 20;

        if (currentHour >= startHours && currentHour < endHours) {
            window.open("https://meet.google.com/rnw-upzq-ogn", "_blank");
        } else {
            setShowModal(true);
        }
    };

    return (
        <div className="lg:flex gap-10 my-10 container mx-auto px-10">
            <div className="py-20 rounded-xl lg:w-1/2 flex items-start">
                <img className="mx-auto object-cover" src={image} alt="" />
            </div>

            <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold">{adventure_title}</h2>
                <p className="text-md my-1 font-medium">{short_description}</p>
                <p className="text-md my-2 font-medium">Location: {location}</p>
                <p className="text-md my-2 font-medium">
                    <div
                        className={`inline-block px-3 py-1 ${
                            booking_availability ? "bg-green-400" : "bg-red-400"
                        } text-white p-4 rounded text-center`}
                    >
                        {booking_availability ? "Available for book" : "Not Available"}
                    </div>
                </p>
                <div className="divider"></div>
                <p className="text-md my-1 font-medium">Category: {category_name}</p>
                <p className="text-md my-1">
                    Cost: <span className="font-bold">${adventure_cost}</span>
                </p>

                <h2 className="text-black">Included Items:</h2>
                <div className="my-3 grid grid-cols-3 gap-3">
                    {included_items.map((tag, idx) => (
                        <button
                            key={idx}
                            className="btn btn-xs bg-gray-100 text-gray-500 font-bold"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <div className="divider"></div>
                <h2 className="text-black">Special Instructions:</h2>
                <div className="my-3 grid grid-cols-3 gap-3">
                    {special_instructions.map((tag, idx) => (
                        <button
                            key={idx}
                            className="btn btn-xs bg-gray-100 text-gray-500 p-1 font-bold"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <div className="divider"></div>
                <p className="text-md my-1">
                    Duration: <span className="font-bold"> {duration}</span>
                </p>
                <p className="text-md my-1">
                    Adventure Level: <span className="font-bold">{adventure_level}</span>
                </p>
                <p className="text-md my-1">
                    Max Group Size: <span className="font-bold">{max_group_size}</span>
                </p>

                <div className="my-5">
                    <button
                        onClick={handleExpertButton}
                        disabled={!booking_availability}
                        className="btn text-white bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
                    >
                        Talk with Expert
                    </button>
                </div>
            </div>

            {/* DaisyUI Modal */}
            {showModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h2 className="font-bold text-lg">Time Restriction</h2>
                        <p className="py-4">
                            You can only access this feature between 10:00 AM and 8:00 PM.
                        </p>
                        <div className="modal-action">
                            <button
                                className="btn btn-primary"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MountainDetails;
