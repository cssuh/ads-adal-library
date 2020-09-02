import { ErrorCodes } from './errors';
export declare class AzureAuthError extends Error {
    private errorCode;
    private readonly errorMessage;
    private readonly originalException?;
    constructor(errorCode: ErrorCodes, errorMessage: string, originalException?: any);
    getPrintableString(): string;
}
