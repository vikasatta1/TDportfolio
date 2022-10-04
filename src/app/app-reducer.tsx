//app-reducer.tsx


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: '' as RequestStatusType
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}
export const changeAppStatus = (status:RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
type ActionsType = changeAppStatusType
export type changeAppStatusType = ReturnType<typeof changeAppStatus>