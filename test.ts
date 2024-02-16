import getIcons from "./index";

const query = "food";
const limit = 2;

getIcons(query,limit)
    .then((icons) => {
        console.log("Fetched Icons:", icons);
    })
    .catch((error) => {
        console.error("Failed to fetch icons:", error);
    });