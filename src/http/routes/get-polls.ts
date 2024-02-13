import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'

export async function getPolls(app: FastifyInstance) {
    app.get("/polls/", async (request, reply) => {
        reply.header("Access-Control-Allow-Origin", "*");
        reply.header("Access-Control-Allow-Methods", "GET");
        
        const polls = await prisma.poll.findMany({
            include: {
                options: {
                    select: {
                        id: true,
                        title: true
                    }
                }
            }
        })

        if (!polls) {
            return reply.status(400).send({ message: "Polls not found."})
        }
    
        return reply.status(200).send({polls: polls})
    })
}