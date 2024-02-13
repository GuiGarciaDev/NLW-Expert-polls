import { FastifyInstance } from 'fastify'

export async function getSessionId(app: FastifyInstance) {
    app.get("/", async (request, reply) => {
        reply.header("Access-Control-Allow-Origin", "*");
        reply.header("Access-Control-Allow-Methods", "GET");
        let { sessionId } = request.cookies

        if (sessionId) {
            return reply.status(200).send({voted: true})
        } 
        if (!sessionId) {
            return reply.status(200).send({voted: false})
        }
    
        return reply.status(500).send()
    })
}