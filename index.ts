import dotenv from "dotenv"
import axios from "axios"
dotenv.config()

const base_Url = "https://node-icon-finder-xma7.vercel.app/icon/"

interface IconTypes {
    term: string
    thumbnail_url: string
}

const getIcons = async (query: string) => {
    try {
        const response = await axios.get(`${base_Url}${query}`)

        const iconsData = response.data

        const Icons = iconsData.icons.filter((icon: IconTypes) => icon.term.includes(`${query}`))

        const limitedIcons = Icons.slice(0, 20)

        const thumbnails = limitedIcons.map((icon: IconTypes) => ({
            thumbnailUrl: icon.thumbnail_url,
            name: icon.term,
        }))

        return thumbnails
    } catch (error) {
        console.error("Error fetching icons:", error)
        return []
    }
}

// NOTE: TEST
getIcons("food")
    .then((icon) => {
        console.log(icon)
    })
    .catch((error) => {
        console.error("Failed to fetch icon:", error)
    })

export default getIcons
