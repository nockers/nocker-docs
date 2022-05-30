import { Box, Fade, ThemeProvider } from "@mui/material"
import {
  createDefaultTheme,
  NockerEmotionLike,
  NockerProvider,
} from "@nocker/mui"
import { BoxFrame } from "@site/src/components/BoxFrame"
import React, { FC } from "react"

export const BoxFrameEmotionLike: FC = () => {
  const theme = createDefaultTheme("light")

  return (
    <BoxFrame>
      <Fade in>
        <Box sx={{ py: 2 }}>
          <NockerProvider>
            <ThemeProvider theme={theme}>
              <NockerEmotionLike />
            </ThemeProvider>
          </NockerProvider>
        </Box>
      </Fade>
    </BoxFrame>
  )
}
