


import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist.api";
import axios from "axios";

export default {
    title: 'API'
}


const instance =axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'dff2b0dc-55bd-439a-8c96-6ab659f7b37e',
    }
})

export const GetTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '76c837f0-2e6c-4658-9747-6b86701964f8'
   instance.get(`todo-lists/${todolistId}/tasks`)
         .then((res)=> {
               setState(res.data)
           })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '76c837f0-2e6c-4658-9747-6b86701964f8'
        instance.post(`todo-lists/${todolistId}/tasks`,{title:'lola'})
            .then((res)=> {

                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '76c837f0-2e6c-4658-9747-6b86701964f8'
        const taskId ='881f6770-6e20-49a0-a7ba-954d73a098f0'
    instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
            .then((res)=> {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '76c837f0-2e6c-4658-9747-6b86701964f8'
        const taskId ='881f6770-6e20-49a0-a7ba-954d73a098f0 '
       instance.put(`todo-lists/${todolistId}/tasks/${taskId}`,{title:'Vika'})
            .then((res)=> {
                debugger
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

