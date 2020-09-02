import { AzureAuth } from './azureAuth';
import { ProviderSettings, SecureStorageProvider, CachingProvider, Logger, MessageDisplayer, ErrorLookup, StringLookup, AADResource, LoginResponse, Tenant, AuthRequest, UserInteraction } from '../models';
export declare class AzureCodeGrant extends AzureAuth {
    protected readonly providerSettings: ProviderSettings;
    protected readonly secureStorage: SecureStorageProvider;
    protected readonly cachingProvider: CachingProvider;
    protected readonly logger: Logger;
    protected readonly messageDisplayer: MessageDisplayer;
    protected readonly errorLookup: ErrorLookup;
    protected readonly userInteraction: UserInteraction;
    protected readonly stringLookup: StringLookup;
    protected readonly authRequest: AuthRequest;
    constructor(providerSettings: ProviderSettings, secureStorage: SecureStorageProvider, cachingProvider: CachingProvider, logger: Logger, messageDisplayer: MessageDisplayer, errorLookup: ErrorLookup, userInteraction: UserInteraction, stringLookup: StringLookup, authRequest: AuthRequest);
    protected login(tenant: Tenant, resource: AADResource): Promise<LoginResponse>;
    /**
 * Requests an OAuthTokenResponse from Microsoft OAuth
 *
 * @param tenant
 * @param resource
 * @param authCode
 * @param redirectUri
 * @param codeVerifier
 */
    private getTokenWithAuthorizationCode;
    private createCryptoValues;
}
