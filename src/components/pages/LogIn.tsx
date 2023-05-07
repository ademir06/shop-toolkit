import React from 'react';
import "../../style/index.scss"
import images from "../../img/kingsmanShopStore.jpg"
import {FcGoogle} from "react-icons/fc";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {useAppSelector} from "../../Hooks/useAppSelector";
import {setValue} from "../../store/Reducer/ActionCreators";
import axios from "axios";

const LogIn = () => {
    const dispatch = useAppDispatch()
    const {value} = useAppSelector(s => s.LoginReducerSlice)

    console.log(value)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setValue({...value, [e.target.name]: e.target.value}))
    }


    const newProduct = {

    }

    const formChange = async (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault()
        await axios.post(``, newProduct)
    }

    return (
        <>
            <div id="logIn" className="flex items-center" style={{
                background: `url("${images}") no-repeat center/cover`,
                objectFit: "cover"
            }}>
                <div className="container">
                    <div className="logIn flex justify-center">
                        <div className="logIn--nav p-5 bg-black/40 w-[550px] rounded h-[400px]">
                            <form action="#" onSubmit={formChange}>
                                <div className="flex flex-col items-center">
                                    <input value={value.email} onChange={handleChange} name={"email"} type="email" placeholder="email" className=""/>
                                    <input value={value.password} onChange={handleChange} name={"password"} type="password" placeholder="password" className=""/>

                                    <button onClick={formChange} className="logIn--nav__button">Continue</button>
                                    <button className="logIn--nav__child"><FcGoogle className="text-3xl mx-2"/>Continue
                                        with Google
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;