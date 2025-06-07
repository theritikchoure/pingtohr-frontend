import { apiManager } from '../apiManager';

type LoginResponse = {
    accessToken: string;
    refreshToken: string;
    user: {
        id: string;
        username: string;
    };
};

export const login = ( email: string, password: string ) =>
    apiManager.post<LoginResponse>( '/auth/login', { email, password } );

export const register = ( username: string, email: string, password: string ) =>
    apiManager.post( '/auth/register', { username, email, password } );

export const getProfile = () =>
    apiManager.get( '/auth/profile' );
