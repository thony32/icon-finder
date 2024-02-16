# React Icons Finder

A simple module to fetch icons based on a specified query.

## Installation

Install the module using npm:

```bash
npm install react-icons-finder

```

## usage

```jsx
import getIcons from "react-icons-finder";

const query = "food";
const limit = 2

getIcons(query, limit)
  .then((icons) => {
    console.log("Fetched Icons:", icons);
  })
  .catch((error) => {
    console.error("Failed to fetch icons:", error);
  });
```
