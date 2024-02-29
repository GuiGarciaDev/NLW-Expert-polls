"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cookie_1 = __importDefault(require("@fastify/cookie"));
const create_poll_1 = require("./routes/create-poll");
const get_poll_1 = require("./routes/get-poll");
const vote_on_poll_1 = require("./routes/vote-on-poll");
const websocket_1 = __importDefault(require("@fastify/websocket"));
const polls_results_1 = require("./ws/polls-results");
const get_sessionId_1 = require("./routes/get-sessionId");
const cors_1 = __importDefault(require("@fastify/cors"));
const app = (0, fastify_1.default)();
app.register(cookie_1.default, {
    secret: "polls-app-nlw",
    hook: "onRequest",
});
app.register(cors_1.default, {
    origin: process.env.FRONTEND_URL,
    credentials: true
});
app.register(websocket_1.default);
app.register(create_poll_1.createPoll);
app.register(get_poll_1.getPoll);
app.register(vote_on_poll_1.voteOnPoll);
app.register(polls_results_1.pollResults);
app.register(get_sessionId_1.getSessionId);
app.listen({ port: 3333 }).then(() => {
    console.log(`server running on ${process.env.FRONTEND_URL}`);
});
