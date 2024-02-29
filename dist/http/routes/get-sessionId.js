"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSessionId = void 0;
async function getSessionId(app) {
    app.get("/", async (request, reply) => {
        let { sessionId } = request.cookies;
        if (sessionId) {
            return reply.status(200).send({ voted: true });
        }
        if (!sessionId) {
            return reply.status(200).send({ voted: false });
        }
        return reply.status(500).send();
    });
}
exports.getSessionId = getSessionId;
