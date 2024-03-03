import fastify from "fastify";
import cookie from "@fastify/cookie";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import fastifyWebsocket from "@fastify/websocket";
import { pollResults } from "./ws/polls-results";
import { getSessionId } from "./routes/get-sessionId";
import cors from "@fastify/cors"

const app = fastify()

app.register(cookie, {
    secret: "polls-app-nlw",
    hook: "onRequest",
})

app.register(cors, {
    origin: process.env.NEXT_PUBLIC_FRONTEND_URL,
    credentials: true
})

app.register(fastifyWebsocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)
app.register(pollResults)
app.register(getSessionId)

app.listen({ port: 3333}).then(() => {
    console.log(`server running on ${process.env.NEXT_PUBLIC_API_URL}`); 
})