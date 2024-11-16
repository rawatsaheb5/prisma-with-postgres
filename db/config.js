
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log:["query"] // log will prisma all queries on console that will be executed
    
})

export default prisma;