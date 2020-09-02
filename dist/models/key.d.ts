interface KVProvider {
    set(key: string, value: string): Promise<void>;
    get(key: string): string;
    clear(): Promise<void>;
    remove(key: string): Promise<void>;
}
export interface SecureStorageProvider extends KVProvider {
}
export interface CachingProvider extends KVProvider {
}
export {};
