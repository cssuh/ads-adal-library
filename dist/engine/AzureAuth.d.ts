import { ProviderSettings, SecureStorageProvider, Tenant, AADResource, LoginResponse, AzureAccount, Logger, MessageDisplayer, ErrorLookup, CachingProvider, RefreshTokenPostData, AuthorizationCodePostData, TokenPostData, AccountKey, StringLookup, DeviceCodeStartPostData, DeviceCodeCheckPostData, AzureAuthType, UserInteraction } from '../models';
import { AxiosResponse } from 'axios';
import { AccessToken, Token, TokenClaims, RefreshToken, OAuthTokenResponse } from '../models/auth';
export declare abstract class AzureAuth {
    protected readonly providerSettings: ProviderSettings;
    protected readonly secureStorage: SecureStorageProvider;
    protected readonly cachingProvider: CachingProvider;
    protected readonly logger: Logger;
    protected readonly messageDisplayer: MessageDisplayer;
    protected readonly errorLookup: ErrorLookup;
    protected readonly userInteraction: UserInteraction;
    protected readonly stringLookup: StringLookup;
    protected readonly azureAuthType: AzureAuthType;
    static readonly ACCOUNT_VERSION = "2.0";
    protected readonly commonTenant: Tenant;
    protected readonly clientId: string;
    protected readonly loginEndpointUrl: string;
    constructor(providerSettings: ProviderSettings, secureStorage: SecureStorageProvider, cachingProvider: CachingProvider, logger: Logger, messageDisplayer: MessageDisplayer, errorLookup: ErrorLookup, userInteraction: UserInteraction, stringLookup: StringLookup, azureAuthType: AzureAuthType);
    protected abstract login(tenant: Tenant, resource: AADResource): Promise<LoginResponse>;
    startLogin(): Promise<AzureAccount | undefined>;
    private getHomeTenant;
    refreshAccess(account: AzureAccount): Promise<AzureAccount>;
    hydrateAccount(token: Token | AccessToken, tokenClaims: TokenClaims): Promise<AzureAccount>;
    getAccountSecurityToken(account: AzureAccount, tenantId: string, azureResource: AADResource): Promise<Token | undefined>;
    /**
     * Refreshes a token, if a refreshToken is passed in then we use that. If it is not passed in then we will prompt the user for consent.
     * @param tenant
     * @param resource
     * @param refreshToken
     */
    refreshToken(tenant: Tenant, resource: AADResource, refreshToken: RefreshToken | undefined): Promise<OAuthTokenResponse | undefined>;
    getToken(tenant: Tenant, resource: AADResource, postData: AuthorizationCodePostData | TokenPostData | RefreshTokenPostData): Promise<OAuthTokenResponse | undefined>;
    getTokenHelper(tenant: Tenant, resource: AADResource, accessTokenString: string, refreshTokenString: string, expiresOnString: string): Promise<OAuthTokenResponse | undefined>;
    getTenants(token: AccessToken): Promise<Tenant[]>;
    private saveToken;
    getSavedToken(tenant: Tenant, resource: AADResource, accountKey: AccountKey): Promise<{
        accessToken: AccessToken;
        refreshToken: RefreshToken;
        expiresOn: string;
    } | undefined>;
    handleInteractionRequired(tenant: Tenant, resource: AADResource): Promise<OAuthTokenResponse | undefined>;
    /**
     * Asks the user if they would like to do the interaction based authentication as required by OAuth2
     * @param tenant
     * @param resource
     */
    private askUserForInteraction;
    createAccount(tokenClaims: TokenClaims, key: string, tenants: Tenant[]): AzureAccount;
    makePostRequest(url: string, postData: AuthorizationCodePostData | TokenPostData | DeviceCodeStartPostData | DeviceCodeCheckPostData): Promise<AxiosResponse<any>>;
    private makeGetRequest;
    protected getTokenClaims(accessToken: string): TokenClaims | undefined;
    protected toBase64UrlEncoding(base64string: string): string;
    deleteAllCache(): Promise<void>;
}
