import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../Hooks/useAppDispatch";
import {useAppSelector} from "../../../Hooks/useAppSelector";
import {setCard} from "../../../store/Reducer/ActionCreators";
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {addToFavorite} from "../../../store/Reducer/ActionCreators/FavoriteCreators";
import {addToBasketsREC, basketDetail} from "../../../store/Reducer/ActionCreators/BasketCreators";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const dispatch = useAppDispatch()
    const {card} = useAppSelector(state => state.CardReducerSlice)
    const {basket} = useAppSelector(s => s.BasketReducer)
    const navigate = useNavigate()
    const found = (el: any) => basket.some(some => some.id === el.id)


    useEffect(() => {
        dispatch(setCard())
    }, [])

    return (
        <div className='container'>
            <div className='flex flex-wrap  items-start justify-between basis-3/3  pt-28'>
                {
                    card.map(el => (
                        <div key={el.id} className="bg-white border my-3 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div onClick={() => {
                                dispatch(basketDetail(el))
                                navigate(`/detail/${el.id}`)
                            }} className='w-[250px]  h-[300px]'>
                                <img className="p-8 rounded-t-lg w-[300px] " src={el.image} alt="product image"/>
                            </div>
                            <div className="px-5 pb-5">
                                <h5 className="text-xl font-semibold my-6 tracking-tight w-[200px] text-gray-900 dark:text-white">{el.title}</h5>
                                <div className="flex items-center justify-between w-[200px]">
                                    <button  onClick={()=> dispatch(addToFavorite(el))} className="text-2xl"><MdOutlineFavoriteBorder
                                        className='text-red-800'/></button>
                                    {
                                        found(el) ?
                                            <button onClick={() => navigate("/basket")}
                                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                open basket
                                                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                </svg>
                                            </button>:
                                            <button onClick={() => dispatch(addToBasketsREC(el))} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                                    }
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Main;