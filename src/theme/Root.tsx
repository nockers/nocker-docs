import { createTheme, ThemeProvider } from "@mui/material"
import { useHtmlColorMode } from "@site/src/core/hooks/useHtmlColorMode"
import React, { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

/**
 * https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root
 * @param props
 * @returns
 */
const Root: FC<Props> = (props) => {
  const colorMode = useHtmlColorMode()

  const theme = createTheme({
    palette: {
      mode: colorMode,
    },
  })

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Root
