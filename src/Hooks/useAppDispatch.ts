import {useDispatch} from "react-redux";
import {appDispatch} from "../store";


export const useAppDispatch = () => useDispatch<appDispatch>()