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
        register: "/auth/register",
        vk: (returnUrl: string = DOMAIN) => "http://localhost/api/oauth/vk?returnUrl=" + encodeURIComponent(returnUrl),
        ok: (returnUrl: string = DOMAIN) => "http://localhost/api/oauth/ok?returnUrl=" + encodeURIComponent(returnUrl),
    },
    profile: {
        base: "/profile",
        me: "/profile/me"
    }
};
