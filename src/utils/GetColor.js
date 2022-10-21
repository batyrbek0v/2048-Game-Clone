
export const getColor = (num) => {
  switch (num) {
    case 2:
      return "#eee4da"

    case 4:
      return "#eee1c9"

    case 8:
      return "#f3b27a"

    case 16:
      return "#f69664"

    case 32:
      return "#f77c5f"

    case 64:
      return "#f75f3b"

    case 128:
      return "#edd073"

    case 256:
      return "#edcc62"

    case 512:
      return "#edc850"
    case 1024:
      return "#edc53f"
    case 2048:
      return "#edc22d"
    case 4096:
      return "#D41129"
    default:
      break;
  }
  if (num > 4096) {
    return "#7A40B9"
  }
} 