import { prisma } from './db'

export function getTodos() {
    return prisma.todo.findMany()
}
