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
        vk: (returnUrl: string = DOMAIN, register: boolean = false) => "http://localhost/api/oauth/vk?returnUrl=" + encodeURIComponent(returnUrl) + (register ? "&register=true" : ""),
        ok: (returnUrl: string = DOMAIN, register: boolean = false) => "http://localhost/api/oauth/ok?returnUrl=" + encodeURIComponent(returnUrl) + (register ? "&register=true" : ""),
    },
    profile: {
        base: "/profile",
        me: "/profile/me"
    }
};
