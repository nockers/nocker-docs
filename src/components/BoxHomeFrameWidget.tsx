import { Box, Chip, Grid, Stack } from "@mui/material"
import { BoxFrameCard } from "@site/src/components/BoxFrameCard"
import { BoxFrameEmotion } from "@site/src/components/BoxFrameEmotion"
import { BoxFrameEmotionHand } from "@site/src/components/BoxFrameEmotionHand"
import { BoxFrameEmotionLike } from "@site/src/components/BoxFrameEmotionLike"
import { BoxFrameTicket } from "@site/src/components/BoxFrameTicket"
import React, { FC, useState } from "react"

export const BoxHomeFrameWidget: FC = () => {
  const [widgetType, setWidgetType] = useState<
    "CARD" | "TICKET" | "EMOTION_FIVE" | "EMOTION_TWO" | "EMOTION_ONE"
  >("CARD")

  return (
    <Box sx={{ py: 8 }}>
      <Stack alignItems={"center"} spacing={4}>
        <Grid container direction={"row"} justifyContent={"center"} spacing={2}>
          <Grid item>
            <Chip
              label={"カード"}
              color={widgetType === "CARD" ? "primary" : "default"}
              onClick={() => {
                setWidgetType("CARD")
              }}
            />
          </Grid>
          <Grid item>
            <Chip
              label={"チケット"}
              color={widgetType === "TICKET" ? "primary" : "default"}
              onClick={() => {
                setWidgetType("TICKET")
              }}
            />
          </Grid>
          <Grid item>
            <Chip
              label={"5段階評価"}
              color={widgetType === "EMOTION_FIVE" ? "primary" : "default"}
              onClick={() => {
                setWidgetType("EMOTION_FIVE")
              }}
            />
          </Grid>
          <Grid item>
            <Chip
              label={"2段階評価"}
              color={widgetType === "EMOTION_TWO" ? "primary" : "default"}
              onClick={() => {
                setWidgetType("EMOTION_TWO")
              }}
            />
          </Grid>
          <Grid item>
            <Chip
              label={"いいねボタン"}
              color={widgetType === "EMOTION_ONE" ? "primary" : "default"}
              onClick={() => {
                setWidgetType("EMOTION_ONE")
              }}
            />
          </Grid>
        </Grid>
        <Box>
          {widgetType === "CARD" && <BoxFrameCard />}
          {widgetType === "TICKET" && <BoxFrameTicket />}
          {widgetType === "EMOTION_FIVE" && <BoxFrameEmotion />}
          {widgetType === "EMOTION_TWO" && <BoxFrameEmotionHand />}
          {widgetType === "EMOTION_ONE" && <BoxFrameEmotionLike />}
        </Box>
      </Stack>
    </Box>
  )
}
