import { Box, Fade, ThemeProvider } from "@mui/material"
import { createDefaultTheme, NockerCard, NockerProvider } from "@nocker/mui"
import { BoxPreview } from "@site/src/components/BoxPreview"
import React, { FC } from "react"

export const BoxPreviewCard: FC = () => {
  const theme = createDefaultTheme("light")

  return (
    <BoxPreview>
      <Fade in>
        <Box sx={{ py: 2 }}>
          <NockerProvider>
            <ThemeProvider theme={theme}>
              <NockerCard />
            </ThemeProvider>
          </NockerProvider>
        </Box>
      </Fade>
    </BoxPreview>
  )
}
