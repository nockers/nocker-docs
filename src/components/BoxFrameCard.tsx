import { Box, Fade, ThemeProvider } from "@mui/material"
import { createDefaultTheme, NockerCard, NockerProvider } from "@nocker/mui"
import { BoxFrame } from "@site/src/components/BoxFrame"
import React, { FC } from "react"

export const BoxFrameCard: FC = () => {
  const theme = createDefaultTheme("light")

  return (
    <BoxFrame>
      <Fade in>
        <Box>
          <NockerProvider>
            <ThemeProvider theme={theme}>
              <NockerCard />
            </ThemeProvider>
          </NockerProvider>
        </Box>
      </Fade>
    </BoxFrame>
  )
}
