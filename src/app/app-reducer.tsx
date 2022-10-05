//app-reducer.tsx


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type StateType = {
    status: RequestStatusType | ''
    error:string | null
}
const initialState:StateType = {
    status: '' ,
    error: null
}

/*type InitialStateType = typeof initialState*/

export const appReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}

        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}
export const setAppStatusAC = (status:RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error:any) => ({type: 'APP/SET-ERROR', error} as const)
type ActionsType = changeAppStatusType | errorAppType
export type changeAppStatusType = ReturnType<typeof setAppStatusAC>
export type errorAppType = ReturnType<typeof setAppErrorAC>