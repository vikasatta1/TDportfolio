import {Dispatch} from 'redux'
import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "../app/app-reducer";
import {authAPI, todolistsAPI} from "../api/todolists-api";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";
import {addTaskAC} from "./TodolistsList/tasks-reducer";
import axios, {AxiosError} from "axios";


const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// thunks
export const loginTC = (data: any) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const respons = await authAPI.login(data)
        if (respons.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(true))
            dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(respons.data, dispatch,)
        }
    } catch (e) {
        if (axios.isAxiosError(e)) {
    handleServerNetworkError(e,dispatch)
        }
    }
}
export const logOutThunk = () => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    try{
        const respons = await  authAPI.logout()
        //@ts-ignore
        if(respons.data.resultCode === 0){
            dispatch(setIsLoggedInAC(false))
            dispatch(setAppStatusAC('succeeded'))
        }
    }catch (e){
        if (axios.isAxiosError(e)) {
            handleServerNetworkError(e,dispatch)
        }
    }

}

// types
type ActionsType = ReturnType<typeof setIsLoggedInAC>
    | SetAppStatusActionType
    | SetAppErrorActionType

