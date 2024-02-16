declare const getIcons: (query: string, limit: number) => Promise<{
    thumbnailUrl: string;
    name: string;
}[]>;

export { getIcons as default };
