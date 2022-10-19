import React from "react"

export const useEvent = (event, handler, passive = false) => {
  React.useEffect(() => {
    window.addEventListener(event, handler, passive)

    return function cleanUp() {
      window.removeEventListener(event, handler)
    }
  })
}

