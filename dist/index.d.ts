export interface Icon {
    term: string
    thumbnail_url: string
}

export interface Thumbnail {
    thumbnailUrl: string
    name: string
}

export function getIcons(query: string): Promise<Thumbnail[]>
