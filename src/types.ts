export type ConfigData = Record<string, string>;

export interface DecryptOptions {
    key?: string;
}

export interface LoadOptions extends DecryptOptions {
    file?: string | string[];
    env?: string;
}

export interface EncryptOptions {
    key?: string;
    encryptKeys?: (string | RegExp)[];
}

export const DefaultLoadOptions: Partial<LoadOptions> = {
    key: process.env.CONFIG_DECRYPTION_KEY
};

export const DefaultEncryptOptions: Partial<EncryptOptions> = {
    key: process.env.CONFIG_ENCRYPTION_KEY,
    encryptKeys: [/_SECRET$/]
};
