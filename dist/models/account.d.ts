import { ProviderSettings } from ".";
export interface AzureAccount {
    key: AccountKey;
    displayInfo: AccountDisplayInfo;
    properties: AzureAccountProperties;
    isStale: boolean;
    delete?: boolean;
}
export interface AccountKey {
    id: string;
    providerId: string;
    accountVersion?: string;
}
export interface AccountDisplayInfo {
    accountType: AccountType;
    userId: string;
    displayName: string;
    email?: string;
    name: string;
}
export interface Tenant {
    id: string;
    displayName: string;
    userId?: string;
    tenantCategory?: string;
}
export declare enum AzureAuthType {
    AuthCodeGrant = 0,
    DeviceCode = 1
}
export declare enum AccountType {
    Microsoft = "microsoft",
    WorkSchool = "work_school"
}
interface AzureAccountProperties {
    /**
     * Auth type of azure used to authenticate this account.
     */
    azureAuthType: AzureAuthType;
    providerSettings: ProviderSettings;
    /**
     * Whether or not the account is a Microsoft account
     */
    isMsAccount: boolean;
    /**
     * A list of tenants (aka directories) that the account belongs to
     */
    tenants: Tenant[];
}
export {};
