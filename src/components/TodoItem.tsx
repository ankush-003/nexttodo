"use client"
interface TodoItemProps {
    id: string;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void;
    deleteTodo?: (id: string) => void;
}

export function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {
    return (
        <li key={id} className="flex gap-1 items-center">
            <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete} onChange={e => {
                toggleTodo(id, e.target.checked)
            }} />
            <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
            {deleteTodo && <button onClick={() => deleteTodo(id)} className="text-slate-300 hover:text-slate-500 px-3">Delete</button>}
        </li>
    )
}