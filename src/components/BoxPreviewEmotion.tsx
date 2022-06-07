import { Box, Fade, ThemeProvider } from "@mui/material"
import { createDefaultTheme, NockerEmotion, NockerProvider } from "@nocker/mui"
import { BoxPreview } from "@site/src/components/BoxPreview"
import React, { FC } from "react"

export const BoxPreviewEmotion: FC = () => {
  const theme = createDefaultTheme("light")

  return (
    <BoxPreview>
      <Fade in>
        <Box sx={{ py: 2 }}>
          <NockerProvider>
            <ThemeProvider theme={theme}>
              <NockerEmotion />
            </ThemeProvider>
          </NockerProvider>
        </Box>
      </Fade>
    </BoxPreview>
  )
}
