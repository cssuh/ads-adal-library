import { AzureAuth } from './azureAuth';
import { ProviderSettings, SecureStorageProvider, CachingProvider, Logger, MessageDisplayer, ErrorLookup, StringLookup, Tenant, AADResource, LoginResponse, AuthRequest, UserInteraction } from '../models';
export declare class AzureDeviceCode extends AzureAuth {
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
    private setupPolling;
    private checkForResult;
}
