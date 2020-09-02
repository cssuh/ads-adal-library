import { ErrorLookup, Error1Context } from '../models/error';
export declare enum ErrorCodes {
    AuthError = 2,
    TokenRetrieval = 3,
    NoAccessTokenReturned = 4,
    UniqueIdentifier = 5,
    Tenant = 6,
    GetAccount = 7,
    ParseAccount = 8,
    AddAccount = 9,
    GetAccessTokenAuthCodeGrant = 10,
    GetAccessTokenDeviceCodeLogin = 11,
    TimedOutDeviceCode = 12
}
export declare class DefaultErrorLookup implements ErrorLookup {
    getSimpleError(errorCode: ErrorCodes): string;
    getTenantNotFoundError(context: Error1Context): string;
}
