import axios from 'axios';

const axiosInstance = axios.create( {
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
    timeout: 10000,
    // withCredentials: true,
} );

axiosInstance.interceptors.request.use(
    ( config ) => {
        const token = localStorage.getItem( 'accessToken' );
        if ( token ) {
            console.log(token)
            config.headers[ 'Authorization' ] = `Bearer ${token}`;
        }
        return config;
    },
    ( error ) => Promise.reject( error )
);

axiosInstance.interceptors.response.use(
    ( response ) => response,
    ( error ) => {
        // Optional: global error handling (e.g., logout on 401)
        return Promise.reject( error );
    }
);

export default axiosInstance;
