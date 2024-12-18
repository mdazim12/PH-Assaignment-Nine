import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import userImg from '../../assets/user.jpg'







const Navbar = () => {

    const links = <>
        <li className="mx-3"> <NavLink className={'text-lg font-medium'} to='/'>Home</NavLink> </li>
       
       
    
        <li className="mx-3"> <NavLink className={'text-lg font-medium'} to='/my-profile'>My Profile</NavLink> </li>
    



    </>

    const {user,logOut} = useContext(AuthContext)

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>



                <a className=" text-lg lg:text-3xl font-bold uppercase bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
                    <Link to="/">Eco Adventure</Link>
                </a>

                <h2>{user && user?.name}</h2>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>


            <div className="m-auto">
                
                <div className=" ">

                    <div className=" ">
                        <div className="">

                            {
                                user && user.email ? <div>
                                    <img className="w-10 rounded-full" src={user.photoURL} alt="" />
                                    <p>{user.displayName}</p>
                                </div> :
                                <img className="w-10 rounded-full" src={userImg} />
                          
                     
                            }
                    
                        </div>

                    </div>

                </div>

                {
                    user && user?.email ?  (
                        <button onClick={logOut} className=" text-white btn bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 ml-4">Logout</button>
                    )
                    
                    : 
                    
                    (<Link to = '/login'>
                        <button className=" text-white btn bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 ml-4">Login</button>
                   </Link>)
                }


               

            </div>
        </div>
    );
};

export default Navbar;