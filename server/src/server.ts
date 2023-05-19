import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
	const users = await prisma.user.findMany()

	return users
})

app.get('/', () => {
	return 'Página Inicial'
})

app.listen({
	port: 3333
}).then(() => {
	console.log('Server running on http://localhost:3333')
})