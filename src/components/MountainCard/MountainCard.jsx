/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const MountainCard = ({ singleItems }) => {

    const { adventure_title, image, eco_friendly_features,id } = singleItems;

    return (
        <div className="mx-5 ">
            <div className="card bg-base-100 w-96 shadow-xl m-5">
                <figure>
                    <img className="h-[250px] object-cover"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {adventure_title}

                    </h2>
                  
                       
                    <div className=" block mx-auto ">
                            
                        {
                            
                            eco_friendly_features.map((item, idx) => (
                            <div key={idx} className="badge badge-outline m-1 p-1 ">
                                <h3 className="text-center text-sm">  {item} </h3>
                            </div>
                        ))}

                    </div>

                    <Link to = {`/details/${id}`}>

                   
                           <button  className="btn bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500  first-line:text-md text-white">  Explore Now  </button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MountainCard;