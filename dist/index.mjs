var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// index.ts
var base_Url = "https://node-icon-finder-xma7.vercel.app/icon/";
var getIcons = (query) => __async(void 0, null, function* () {
  try {
    const response = yield fetch(`${base_Url}${query}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    const iconsData = yield response.json();
    const Icons = iconsData.icons.filter((icon) => icon.term.includes(`${query}`));
    const limitedIcons = Icons.slice(0, 20);
    const thumbnails = limitedIcons.map((icon) => ({
      thumbnailUrl: icon.thumbnail_url,
      name: icon.term
    }));
    return thumbnails;
  } catch (error) {
    console.error("Error fetching icons:", error);
    return [];
  }
});
var icon_finder_default = getIcons;
export {
  icon_finder_default as default
};
//# sourceMappingURL=index.mjs.map