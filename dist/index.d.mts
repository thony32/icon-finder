declare const getIcons: (query: string) => Promise<{
    thumbnailUrl: string;
    name: string;
}[]>;

export { getIcons as default };
