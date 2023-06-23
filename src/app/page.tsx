// import Image from 'next/image'
import Link from 'next/link'
import { prisma } from './db'
import { getTodos } from './controllers'
import { TodoItem } from '../components/TodoItem'
// we dont have to make fetch calls because we use server components to fetch data
// these components are rendered on the server and then sent to the client
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

export default async function Home() {
  // const insert = await prisma.todo.create({
  //   data: {
  //     title: 'hello world'
  //   },
  // })
  // const todos = await prisma.todo.findMany()
  const todos = await getTodos()
  return (
    <>
    <header className='flex justify-between items-center mb-4'>
      <h1 className="text-2xl">Todos</h1>
      <div className='flex gap-3'>
      <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">New</Link>
      <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/delete">Delete</Link>
      </div>

    </header>
    <ul className="pl-4">
      {
        todos.map((todo) => (
          // <li key={todo.id} className="mb-4">
          //     <p className="text-xl">{todo.title}</p>
          // </li>
          <TodoItem  key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))
      }
    </ul>
    </>
  )
}
