import axiosInstance from './axiosInstance';

export const apiManager = {
    get: <T = any>( url: string, params?: any ) =>
        axiosInstance.get<T>( url, { params } ),

    post: <T = any>( url: string, data?: any ) =>
        axiosInstance.post<T>( url, data ),

    put: <T = any>( url: string, data?: any ) =>
        axiosInstance.put<T>( url, data ),

    delete: <T = any>( url: string ) =>
        axiosInstance.delete<T>( url ),
};
