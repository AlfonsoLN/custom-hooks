import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [
        {
            id: new Date().getTime() * 1.1,
            description: 'Obtener la gema del Poder 🟣',
            done: false,
        },
        {
            id: new Date().getTime() * 1.2,
            description: 'Obtener la gema del Espacio 🔵',
            done: false,
        },
        {
            id: new Date().getTime() * 1.3,
            description: 'Obtener la gema del Realidad 🔴',
            done: false,
        },
        {
            id: new Date().getTime() * 1.4,
            description: 'Obtener la gema del Alma 🟠',
            done: false,
        },
        {
            id: new Date().getTime() * 1.5,
            description: 'Obtener la gema del Tiempo 🟢',
            done: false,
        },
        {
            id: new Date().getTime() * 1.6,
            description: 'Obtener la gema del Mente 🟡',
            done: false,
        },
    ];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch(action);
    }

    const handleRemoveTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        })
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,
    };
}