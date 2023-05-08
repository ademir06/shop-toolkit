import React from 'react';
import {useAppSelector} from "../../../Hooks/useAppSelector";

const DetailCard = () => {
    const {basketOne} = useAppSelector(s => s.BasketReducer)


    return (
        <div className="pt-32">
            <div className="container">
                <div className="flex justify-between">
                    <img width={400} src={basketOne.image} alt=""/>
                    <div className="m-20">
                        <h1 className="text-2xl font-bold">{basketOne.title}</h1>
                        <h2 className="my-5 font-mono">{basketOne.description}</h2>
                        <p className="font-black">{basketOne.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;