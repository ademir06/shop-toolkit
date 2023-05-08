import React from 'react';
import logo from '../../img/856650d727f346095f9c3fe80ca5dc67.jpg'
import {MdFavoriteBorder} from "react-icons/md";
import {BsBasketFill} from "react-icons/bs";
import {Link, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../Hooks/useAppSelector";

const Header = () => {
    const {login} = useAppSelector(s => s.LoginReducerSlice)
    const {basket} = useAppSelector(s => s.BasketReducer)
    const {favorite} = useAppSelector(state => state.FavoriteReducer)
    const navigate = useNavigate()

    const basLen = basket.reduce((acc, el) => {
        return acc + el.quantity
    }, 0)
    return (
        <>
            <nav className="border-gray-200 dark:bg-gray-900 bg-black/80 text-white fixed w-full z-20">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="/main" className="flex items-center">
                        <img src={logo} className="h-8 mr-3 w-[100px]  rounded-2xl h-[60px]" alt="Flowbite Logo"/>
                    </a>
                    <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                        <li>
                            <Link to={'/main'} className="dark:text-white hover:underline"
                                  aria-current="page">Home</Link>
                        </li>
                    </ul>
                    <div className="flex items-center relative">
                        <div hidden={login.status}>
                            <Link to={'/'}
                                  className="text-lg text-2xl text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
                        </div>
                        <button onClick={() => navigate("/basket")} className="text-lg  text-2xl text-blue-600 dark:text-blue-500 hover:underline px-20"><BsBasketFill/></button>
                        <Link to={'/favorite'}
                              className=" text-2xl text-blue-600 dark:text-blue-500 hover:underline px-14"><MdFavoriteBorder/>
                        </Link>
                        <h1 className="absolute -right-1 -top-3">{basLen === 0 ? "" : basLen}</h1>
                        <button onClick={() => navigate("/basket")}
                                className="text-lg  text-2xl text-blue-600 dark:text-blue-500 hover:underline">
                            <BsBasketFill/></button>
                        <a href="#" className="text-lg  text-2xl text-blue-600 dark:text-blue-500 hover:underline px-20"><BsBasketFill/></a>
                        <Link to={'/favorite'} className=" text-2xl text-blue-600 dark:text-blue-500 hover:underline"><MdFavoriteBorder/> </Link>
                        <h1 className="absolute right-24 -top-4">{basLen === 0 ? "" : basLen}</h1>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;