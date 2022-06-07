import { Box, Fade, ThemeProvider } from "@mui/material"
import { createDefaultTheme, NockerProvider, NockerTicket } from "@nocker/mui"
import { BoxPreview } from "@site/src/components/BoxPreview"
import React, { FC } from "react"

export const BoxPreviewTicket: FC = () => {
  const theme = createDefaultTheme("light")

  return (
    <BoxPreview>
      <Fade in>
        <Box sx={{ py: 2 }}>
          <NockerProvider>
            <ThemeProvider theme={theme}>
              <NockerTicket />
            </ThemeProvider>
          </NockerProvider>
        </Box>
      </Fade>
    </BoxPreview>
  )
}
