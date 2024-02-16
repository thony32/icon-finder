"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
var base_Url = process.env.URL;
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
//# sourceMappingURL=index.js.map