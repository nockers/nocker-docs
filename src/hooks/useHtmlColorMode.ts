import { getColorModeValue } from "@site/src/hooks/getHtmlColorMode"
import { useEffect, useState } from "react"

export const useHtmlColorMode = () => {
  const [colorMode, setColorMode] = useState<"dark" | "light">(() => {
    return getColorModeValue()
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const value = getColorModeValue()
      setColorMode(value)
    }, 100)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return colorMode
}
