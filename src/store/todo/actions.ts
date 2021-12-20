import { Todo, TodoActionType, TodoActionInterface } from './types'

export const addTodo = (todo: Todo): TodoActionInterface => {
    return {
        type: TodoActionType.ADD_TODO,
        payload: todo
    }
}

export const checkTodo = (index: number): TodoActionInterface => {
    return {
        type: TodoActionType.CHECK_TODO,
        payload: index
    }
}

export const deleteTodo = (index: number): TodoActionInterface => {
    return {
        type: TodoActionType.DELETE_TODO,
        payload: index
    }
}