import Link from 'next/link'
import { prisma } from '../db'
import { redirect } from 'next/navigation'
//server functions
async function createTodo(data: FormData) {
    "use server"
    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Title is required")
    }

    await prisma.todo.create({
        data:{
            title: title,
        }
    })

    console.log("Hi from server action!");
    redirect("/")
}



export default function Page() {
    return (
    <>
    <header className='flex justify-between items-center mb-4'>
      <h1 className="text-2xl">Create New Todo</h1>
    </header>
    <form action={createTodo} className='flex flex-col gap-2'>
        <input type="text" name="title" id="title" placeholder="Title" className="border border-slate-300 px-2 py-1 rounded outline-none bg-transparent focus-within:border-slate-100" />
        <div className='flex gap-2 items-center justify-end'>
            <Link href=".." className='border border-slate-300 px-2 py-1 rounded outline-none bg-transparent focus-within:border-slate-100'>Cancel</Link>
            <button type="submit" className='border border-slate-300 px-2 py-1 rounded outline-none bg-transparent focus-within:border-slate-100'>Create</button>
        </div>
    </form>
    </>
    )
}