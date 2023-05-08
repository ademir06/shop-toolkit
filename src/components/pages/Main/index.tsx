import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../Hooks/useAppDispatch";
import {useAppSelector} from "../../../Hooks/useAppSelector";
import {setCard} from "../../../store/Reducer/ActionCreators";

const Main = () => {
    const dispatch = useAppDispatch()
    const {card} = useAppSelector(state => state.CardReducerSlice)
    console.log(card)
    useEffect(() => {
        dispatch(setCard())
    }, [])
    return (
        <div className='container'>
            <div className='flex flex-wrap  items-center justify-between basis-3/3 pt-28'>
                {
                    card.map(el => (

                        <div
                            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className='w-[400px] h-[400px] '>
                                <img className="p-8 rounded-t-lg w-[300px] " src={el.image}
                                     alt="product image"/>
                            </div>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold my-6 tracking-tight w-[200px] text-gray-900 dark:text-white">{el.title}</h5>
                                </a>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{el.price}</span>
                                    <a href="#"
                                       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                                        to cart</a>
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