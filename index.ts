const base_Url = "https://node-icon-finder-xma7.vercel.app/icon/";

interface IconTypes {
    term: string;
    thumbnail_url: string;
}

const getIcons = async (query: string) => {
    try {
        const response = await fetch(`${base_Url}${query}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const iconsData: { icons: IconTypes[] } = await response.json();

        const Icons = iconsData.icons.filter((icon: IconTypes) => icon.term.includes(`${query}`));

        const limitedIcons = Icons.slice(0, 20);

        const thumbnails = limitedIcons.map((icon: IconTypes) => ({
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
