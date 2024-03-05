import { z } from 'zod'
import { prisma } from '../../lib/prisma'
import { randomUUID } from 'node:crypto'
import { FastifyInstance } from 'fastify'
import { redis } from '../../lib/redis'
import { voting } from '../../utils/voting-pub-sub'

export async function voteOnPoll(app: FastifyInstance) {
    app.post("/polls/:pollId/votes", async (request, reply) => {
        const voteOnPollBody = z.object({
            pollOptionId: z.string().uuid(),
        })

        const voteOnPollParams = z.object({
            pollId: z.string().uuid(),
        })
    
        const { pollId } = voteOnPollParams.parse(request.params)
        const { pollOptionId } = voteOnPollBody.parse(request.body)
        
        let { sessionId } = request.cookies   

        if (sessionId) {
            const userPreviousVoteOnPoll = await prisma.vote.findUnique({
                where: {
                    sessionId_pollId: {
                        sessionId,
                        pollId
                    }
                }
            })

            if (userPreviousVoteOnPoll && userPreviousVoteOnPoll.pollOptionId !== pollOptionId) {
                // Deleting previous vote
                await prisma.vote.delete({
                    where: {
                        id: userPreviousVoteOnPoll.id
                    }
                })

                const votes = await redis.zincrby(pollId, -1, userPreviousVoteOnPoll.pollOptionId) // Drecrement vote when vote change

                voting.publish(pollId, {
                    pollOptionId: userPreviousVoteOnPoll.pollOptionId,
                    votes: Number(votes),
                }) 
               
            } else if (userPreviousVoteOnPoll) {
                return reply.status(409).send({ message: "You already voted on this poll" })
            }
        }

        if (!sessionId) {
            sessionId = randomUUID()

            reply.setCookie("sessionId", sessionId, {
                path: "/",
                maxAge: 60 * 60 * 24 * 30,
                signed: true,
                httpOnly: true,
                sameSite: 'none',
                domain: process.env.NEXT_PUBLIC_FRONTEND_DOMAIN
            })
        }

       await prisma.vote.create({ // Creating vote
        data: {
            sessionId,
            pollId,
            pollOptionId
        }
       })

        const votes = await redis.zincrby(pollId, 1, pollOptionId)
    
        voting.publish(pollId, {
            pollOptionId,
            votes: Number(votes),
        })   

        return reply.status(201).send({message: "Your vote has been created"})
    })
}