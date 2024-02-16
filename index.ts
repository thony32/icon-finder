const base_Url = "https://node-icon-finder-xma7.vercel.app/icon/";

interface IconTypes {
    term: string;
    thumbnail_url: string;
}

const getIcons = async (query: string, limit: number) => {
    try {
        const url = `${base_Url}${query}` + "/" + limit;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const iconsData: { icons: IconTypes[] } = await response.json();

        const thumbnails = iconsData.icons.map((icon: IconTypes) => ({
            thumbnailUrl: icon.thumbnail_url,
            name: icon.term,
        }));

        return thumbnails;
    } catch (error) {
        console.error("Error fetching icons:", error);
        return [];
    }
};

export default getIcons;
