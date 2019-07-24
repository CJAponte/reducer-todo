export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CLEAR_DONE = "CLEAR_DONE"

export const initialState = {
    todoitems: [
        {
            name: 'Test To Do',
            id: 1,
            completed: false
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newToDo = {
            name: action.payload,
            id: Date.now(),
            completed: false
        }
        return {
            ...state,
            todoitems: [...state.todoitems, newToDo]
        }
        case TOGGLE_TODO:
            return {
                ...state,
                todoitems: state.todoitems.map(item => {
                    if(action.payload === item.id){
                        return{
                            ...item,
                            completed: !item.completed
                        }
                    }
                    return item
                })
            }
        case CLEAR_DONE:
            return {
                ...state,
                todoitems: state.todoitems.filter(item => !item.completed)
            }
            default:
                return state;
    }
}