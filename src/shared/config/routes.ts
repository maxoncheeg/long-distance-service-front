export const DOMAIN = "http://localhost:5173"

export const ROUTES = {
    home: "/",
    about: "/about",
    trucks: {
        base: "/trucks",
        byId: "/trucks/:id",
        byIdGeneric: (id: number) => `/trucks/${id}`,
    },
    auth: {
        login: "/auth/login",
        registration: "/auth/register",
        vk: (returnUrl: string = DOMAIN) => "http://localhost/api/oauth/vk?returnUrl=" + returnUrl,
        ok: "http://localhost/api/oauth/ok",
    },
};
