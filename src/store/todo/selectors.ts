import { RootState } from '..'

export const getTodoState = (state: RootState) => {
    return state.todoReducer.todos
}