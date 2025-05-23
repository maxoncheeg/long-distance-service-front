export const API_ROUTES = {
    trucks: {
        getList: (skip: number = 0, take: number = 10) => `/api/test/trucks?take=${take}&skip=${skip}`,
        getById: (id: number) => `/api/test/trucks/${id}`
    },
    auth: {
        login: '/api/auth/login',
        logout: '/api/auth/logout',
        pass: (password: string) => `/api/auth/pass?password=${password}`,
        refreshToken: '/api/auth/token/refresh'
    }
}

export const API_DOMAIN : string = import.meta.env.VITE_API_URL