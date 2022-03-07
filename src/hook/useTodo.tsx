import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { api } from "../services/axios/api";

export type TodoList = Todo[]

export type Todo = {
    id: number
    name: string
    tasks: Task[]
}


export interface Task {
    id: number
    name: string
    completed: boolean
}
export interface TaskEditing {
    todoId: number
    taskId: number
    taskMessage: string
}

interface TaskProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    todos: TodoList
    selectedTodo: number | null
    taskEditing: TaskEditing | null
    setTaskEditing: Dispatch<React.SetStateAction<TaskEditing | null>>
    setSelectedTodo: Dispatch<SetStateAction<null | number>>
    handleAddTodo(name: string): void
    handleDeleteTodo(todoId: number): void
    handleUpdateTask(todoId: number, taskId: number, taskMessage: string): void
    handleAddTask(todoId: number, inputTaskValue: string): void
    handleDeleteTask(todoId: number, taskId: number): void
    toggleCompleteTask(todoId: number, taskId: number): Promise<boolean>
}

const TaskContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TaskProvider({ children }: TaskProviderProps) {
    const [todos, setTodos] = useState<TodoList>([])
    const [selectedTodo, setSelectedTodo] = useState<null | number>(null)
    const [taskEditing, setTaskEditing] = useState<null | TaskEditing>(null)
    const alert = useAlert()
    async function fetchData() {
        setTodos(await (await api.get('todos')).data)
    }

    useEffect(() => {
        fetchData()
    }, [selectedTodo])


    async function handleAddTodo(name: string) {
        try {
            const responseData = await api.post('todos', { name })
            if (responseData.status === 201) {
                alert.success('Todo criada com sucesso!')
                setTodos([...todos, responseData.data])
            }
        } catch (e: any) {
            if (e.response) {
                alert.error(e.response.data.error)
            } else if (e.request) {
                alert.error(e.request);
            } else {
                alert.error('Erro inexperado');
            }
        }
    }
    async function handleDeleteTodo(todoId: number) {
        const responseData = await api.delete(`todos/${todoId}`)
        if (responseData.status === 204) {
            setTodos(prev => prev.filter(todo => todo.id !== todoId))
            return
        }
    }
    async function handleUpdateTask(todoId: number, taskId: number, taskMesage: string) {
        if (taskMesage) {
            const responeData = await api.patch(`task/${todoId}/${taskId}`, { name: taskMesage })
            if (responeData.status === 200) {
                await fetchData()
            }
        }
    }
    async function handleDeleteTask(todoId: number, taskId: number) {
        const responseData = await api.delete(`task/${todoId}/${taskId}`)
        if (responseData.status === 204) {
            setTodos(
                todos.map((todo) => {
                    if (todo.id === todoId) {
                        todo.tasks = todo.tasks.filter((task) => task.id !== taskId)
                    }
                    return todo
                })
            )
        }
    }
    async function toggleCompleteTask(todoId: number, taskId: number): Promise<boolean> {
        // @ts-ignore
        const currentTask = todos
            .find((todo) => todo.id === todoId)
            .tasks
            .find((task) => task.id === taskId)

        const responseData = await api.patch(`task/${todoId}/${taskId}`, { completed: !currentTask?.completed })
        if (responseData.status === 200) {
            setTodos(todo => todo.map(task => task.id === taskId ? { ...task, completed: responseData.data.completed } : task))
            return responseData.data.completed
        }
        return currentTask?.completed || false
    }

    async function handleAddTask(todoId: number, inputTaskValue: string) {
        try {
            const responseData = await api.post('task', { name: inputTaskValue, todoId })
            if (responseData.status === 201) {
                setTodos(
                    todos.map((todo) => {
                        if (todo.id === todoId) {
                            todo.tasks.push(responseData.data)
                        }
                        return todo
                    })
                )
                alert.success('Tarefa criada com sucesso!')
            }
        } catch (e: any) {
            if (e.response) {
                alert.error(e.response.data.error)
            } else if (e.request) {
                alert.error(e.request);
            } else {
                alert.error('Erro inexperado');
            }
        }
    }

    return (
        <TaskContext.Provider value={{
            todos,
            selectedTodo,
            setSelectedTodo,
            handleAddTodo,
            handleDeleteTodo,
            handleDeleteTask,
            handleUpdateTask,
            toggleCompleteTask,
            handleAddTask,
            taskEditing,
            setTaskEditing
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export function useTodo() {
    const context = useContext(TaskContext)
    return context
}