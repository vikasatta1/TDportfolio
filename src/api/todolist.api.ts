import axios from 'axios'

const instance =axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'dff2b0dc-55bd-439a-8c96-6ab659f7b37e',
    }
})

export const todolistAPI = {
    getTodolist() {
        return instance.get<Array<TodolistType>>('todo-lists')
    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType<{}>>(`todo-lists/${todolistId}`, {title: title},)
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`)
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{item:TodolistType}>>('todo-lists', {title})
    },
}

type TodolistType = {
    id: string
    addedDate:string
    order:number
    title: string
}
type ResponseType<T> = {
    data: T
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}

