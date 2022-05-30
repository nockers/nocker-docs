import { colors, createTheme, ThemeProvider } from "@mui/material"
import {
  createConfig,
  createDefaultTheme,
  NockerFab,
  NockerProvider,
} from "@nocker/mui"
import { useHtmlColorMode } from "@site/src/hooks/useHtmlColorMode"
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

  const isDarkMode = colorMode === "dark"

  const theme = createTheme({
    palette: {
      mode: colorMode,
      primary: {
        main: isDarkMode ? colors.blue[300] : colors.blue[600],
      },
    },
    typography: {
      fontFamily: ["'M PLUS 1 Code'", "sans-serif"].join(","),
    },
    shape: { borderRadius: 10 },
    shadows: [
      "none",
      isDarkMode ? "none" : "0 2px 4px #4385bb12",
      // `0 2px 4px ${colors.blue[50]}`,
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "done",
      "done",
      "done",
      "done",
      "done",
      "done",
      "none",
      "none",
      "done",
      "done",
      "done",
      "done",
      "done",
      "done",
    ],
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "9999px",
            textTransform: "none",
          },
          text: {
            color: isDarkMode ? colors.common.white : colors.grey[800],
          },
          sizeSmall: {
            padding: "4px 12px",
          },
        },
      },
    },
  })

  const nockerTheme = createDefaultTheme(colorMode)

  const config = createConfig({ projectId: "wkLoRg1EBAq2fh1AFgXMO" })

  return (
    <ThemeProvider theme={theme}>
      {props.children}
      <NockerProvider config={config}>
        <ThemeProvider theme={nockerTheme}>
          <NockerFab />
        </ThemeProvider>
      </NockerProvider>
    </ThemeProvider>
  )
}

export default Root
