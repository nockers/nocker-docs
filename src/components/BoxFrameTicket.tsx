import { Box, Fade, ThemeProvider } from "@mui/material"
import { createDefaultTheme, NockerProvider, NockerTicket } from "@nocker/mui"
import { BoxFrame } from "@site/src/components/BoxFrame"
import React, { FC } from "react"

export const BoxFrameTicket: FC = () => {
  const theme = createDefaultTheme("light")

  return (
    <BoxFrame>
      <Fade in>
        <Box sx={{ py: 2 }}>
          <NockerProvider>
            <ThemeProvider theme={theme}>
              <NockerTicket />
            </ThemeProvider>
          </NockerProvider>
        </Box>
      </Fade>
    </BoxFrame>
  )
}
