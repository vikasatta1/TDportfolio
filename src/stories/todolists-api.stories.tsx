


import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist.api";
import axios from "axios";

export default {
    title: 'API'
}




export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
     todolistAPI.getTodolist()
         .then((res)=> {
               setState(res.data)
           })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'Sad'
      todolistAPI.createTodolist(title)
            .then((res)=> {

                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '6cb2ae54-43c9-4d5b-8767-9f327c49cb5d'
     todolistAPI.deleteTodolist(todolistId)
            .then((res)=> {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '76c837f0-2e6c-4658-9747-6b86701964f8'
        todolistAPI.updateTodolist(todolistId, 'SOME NEW TITLE')
            .then((res)=> {
                debugger
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

