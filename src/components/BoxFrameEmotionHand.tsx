import { Box, Grow } from "@mui/material"
import { PaperFrame } from "@site/src/components/PaperFrame"
import React, { FC } from "react"

export const BoxFrameEmotionHand: FC = () => {
  return (
    <Box>
      <PaperFrame>
        <Grow in timeout={1000}>
          <Box
            component={"iframe"}
            sx={{ display: "block", overflow: "hidden" }}
            height={266}
            width={352}
            src={
              "https://storybook.nocker.dev/iframe.html?args=&id=nockeremotionhand--default&viewMode=story"
            }
          />
        </Grow>
      </PaperFrame>
    </Box>
  )
}
