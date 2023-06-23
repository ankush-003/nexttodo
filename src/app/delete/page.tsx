import Link from 'next/link'
import { prisma } from '../db'
import { getTodos } from '../controllers'
import { redirect } from 'next/navigation'
import { TodoItem } from '../../components/TodoItem'
//server functions
async function updateTodo(data: FormData) {
    "use server"
    console.log("Todos updated");
    redirect("/")
}

async function toggleTodo(id: string, complete: boolean) {
    // since we are passing this function to the client we cannot redirect
    "use server"
    console.log(id, complete);
    await prisma.todo.update({
      where:{
        id: id
      },
      data:{
        complete
      }
    })
  }

async function deleteTodo(id: string) {
    "use server"
    await prisma.todo.delete({
        where: {
            id: id
        }
    })
    console.log(`Todo ${id} deleted`);
}


export default async function Page() {
    const todos = await getTodos()
    return (
    <>
    <header className='flex justify-between items-center mb-4'>
      <h1 className="text-2xl">Create New Todo</h1>
    </header>
    <form action={updateTodo} className='flex flex-col gap-2'>
        {todos.map(todo => (
          <TodoItem  key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
        <div className='mt-5'>
        <button className='border border-slate-300 px-2 py-1 rounded outline-none bg-transparent  focus-within:border-slate-100'>Update</button>
        </div>
    </form>
    </>
    )
}