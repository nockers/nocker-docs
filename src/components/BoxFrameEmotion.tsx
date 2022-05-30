import { Box, Fade, ThemeProvider } from "@mui/material"
import { createDefaultTheme, NockerEmotion, NockerProvider } from "@nocker/mui"
import { BoxFrame } from "@site/src/components/BoxFrame"
import React, { FC } from "react"

export const BoxFrameEmotion: FC = () => {
  const theme = createDefaultTheme("light")

  return (
    <BoxFrame>
      <Fade in>
        <Box>
          <NockerProvider>
            <ThemeProvider theme={theme}>
              <NockerEmotion />
            </ThemeProvider>
          </NockerProvider>
        </Box>
      </Fade>
    </BoxFrame>
  )
}
