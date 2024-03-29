"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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
var icon_finder_exports = {};
__export(icon_finder_exports, {
  default: () => icon_finder_default
});
module.exports = __toCommonJS(icon_finder_exports);
var base_Url = "https://node-icon-finder-xma7.vercel.app/icon/";
var getIcons = (query, limit) => __async(void 0, null, function* () {
  try {
    const url = `${base_Url}${query}/` + limit;
    const response = yield fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    const iconsData = yield response.json();
    const thumbnails = iconsData.icons.map((icon) => ({
      thumbnailUrl: icon.thumbnail_url,
      name: icon.attribution.replace(" from Noun Project", "")
    }));
    return thumbnails;
  } catch (error) {
    console.error("Error fetching icons:", error);
    return [];
  }
});
var icon_finder_default = getIcons;
//# sourceMappingURL=index.js.map