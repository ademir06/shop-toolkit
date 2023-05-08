import React from 'react';
import {useAppSelector} from "../../../Hooks/useAppSelector";
import BasketCard from "./BasketCard";

const Basket = () => {
    const {basket} = useAppSelector(s => s.BasketReducer)

    return (
        <div className="pt-40">
            <div className="container">
                <div>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">

                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                basket.map(el => <BasketCard key={el.id} el={el}/>)
                            }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Basket;