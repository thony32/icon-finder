import getIcons from "./index";

const query = "food";

getIcons(query)
    .then((icons) => {
        console.log("Fetched Icons:", icons);
    })
    .catch((error) => {
        console.error("Failed to fetch icons:", error);
    });