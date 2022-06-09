import { Box, Fade, ThemeProvider } from "@mui/material"
import { createDefaultTheme, WidgetEmotionLike } from "@nocker/mui"
import { BoxPreview } from "@site/src/components/BoxPreview"
import React, { FC } from "react"

export const BoxPreviewEmotionLike: FC = () => {
  const theme = createDefaultTheme("light")

  return (
    <BoxPreview>
      <Fade in>
        <Box sx={{ py: 2 }}>
          <ThemeProvider theme={theme}>
            <WidgetEmotionLike />
          </ThemeProvider>
        </Box>
      </Fade>
    </BoxPreview>
  )
}
