import React from 'react';
import {TBasket} from "../../../store/Reducer/BasketSlice";
import {useAppDispatch} from "../../../Hooks/useAppDispatch";
import {addToBasketsREC, decBasketsREC, deleteBasketsREC} from "../../../store/Reducer/ActionCreators/BasketCreators";
import {AiFillDelete} from "react-icons/ai";


interface IBasketCard {
    el: TBasket
}

const BasketCard = ({el}: IBasketCard) => {
    const dispatch = useAppDispatch()
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {
                    el.title
                }
            </th>
            <td className="px-6 py-4">
                <img src={el.image} width={50} alt=""/>
            </td>
            <td className="px-6 py-4 flex items-center">
                <button onClick={() => dispatch(decBasketsREC(el))} className="hover:text-red-800 text-3xl px-2">-</button>
                <h1  className="text-2xl">
                    {
                        el.quantity
                    }
                </h1>
                <button onClick={() => dispatch(addToBasketsREC(el))} className="hover:text-red-800 text-3xl px-2">+</button>
            </td>
            <td className="px-6 py-4">
                {
                    Math.floor(el.price * el.quantity)
                } com
            </td>
            <td className="px-6 py-4">
                <button onClick={() => dispatch(deleteBasketsREC(el))}><AiFillDelete className="text-2xl"/></button>
            </td>
        </tr>
    );
};

export default BasketCard;