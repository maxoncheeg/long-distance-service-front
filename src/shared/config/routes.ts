export const ROUTES = {
    about: '/about',
    trucks: {
        base: '/trucks',
        byId: '/trucks/:id',
        byIdGeneric: (id: number) => `/trucks/${id}`,
    },
    auth: {
        login: '/auth/login'
    }
}
