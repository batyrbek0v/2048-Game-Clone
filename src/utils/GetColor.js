import React from "react";

export const getColor = (num) => {
  switch (num) {
    case 2:
      return "#eee4da"
      break;

    case 4:
      return "#eee1c9"
      break;

    case 8:
      return "#f3b27a"
      break;

    case 16:
      return "#f69664"
      break;

    case 32:
      return "#f77c5f"
      break;

    case 64:
      return "#f75f3b"
      break;

    case 128:
      return "#edd073"
      break;

    case 256:
      return "#edcc62"
      break;

    case 512:
      return "#edc850"
      break;
    case 1024:
      return "#edc53f"
      break;
    case 2048:
      return "#edc22d"
      break;
    default:
      break;
  }
} 