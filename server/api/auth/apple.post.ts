import * as jose from "jose";
import { z } from "zod";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const res = z.object({
        code: z.string({
            invalid_type_error: "code invalid type",
            required_error: "code required",
        }),
        id_token: z.string({
            invalid_type_error: "id_token invalid type",
            required_error: "id_token required",
        }),
    }).safeParse({
        code: body.code,
        id_token: body.id_token,
    });

    setResponseHeader(event, "access-control-allow-origin", "*");
    if (!res.success) {
        setResponseHeader(event, "content-type", "application/json");
        setResponseStatus(event, 400);
        return {
            message: res.error.issues[0].message,
        };
    }

    const config = useRuntimeConfig();
    const jwks = jose.createRemoteJWKSet(new URL("https://appleid.apple.com/auth/keys"));
    return await jose.jwtVerify(body.id_token, jwks, {
        issuer: "https://appleid.apple.com",
        audience: config.public.clientID as string,
    }).then(async (res) => {
        const landing = `/${res.payload.email}/${res.payload.sub}`;
        await sendRedirect(event, landing, 200);
    }).catch((err) => {
        setResponseHeader(event, "content-type", "application/json");
        setResponseStatus(event, 500);
        return {
            message: err.message,
        };
    });
});
