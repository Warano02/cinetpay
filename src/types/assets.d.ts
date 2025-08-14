declare module '@/assets/assets' {
    type AssetGroup = Record<string, string>;
    interface Assets {
        oneci: string;
        addoha: string;
        logo: string;
        sanlam: string;
        [key: string]: AssetGroup;
    }
    export const assets: Assets;
}
