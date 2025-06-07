import { apiManager } from '../apiManager';

// type LoginResponse = {
//     accessToken: string;
//     refreshToken: string;
//     user: {
//         id: string;
//         username: string;
//     };
// };

export const validateEmails = ( emails: string[], ) =>
    apiManager.post( '/emails/email-validate-bulk', { emails } );


export const smtpAuth = ( email: string, password: string ) =>
    apiManager.post( '/emails/smtp-auth', { email, password } );

export const checkSMTPAuth = () =>
    apiManager.get( '/emails/check-smtp-auth');

export const generateEmailPermutations = ( first_name: string, last_name: string, domain:string ) =>
    apiManager.post( '/emails/generate-permutations', { first_name, last_name, domain } );