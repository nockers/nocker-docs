import { Box, Chip, Grid, Stack } from "@mui/material"
import { BoxFrame } from "@site/src/components/BoxFrame"
import { BoxFrameCard } from "@site/src/components/BoxFrameCard"
import { BoxFrameEmotion } from "@site/src/components/BoxFrameEmotion"
import { BoxFrameEmotionHand } from "@site/src/components/BoxFrameEmotionHand"
import { BoxFrameEmotionLike } from "@site/src/components/BoxFrameEmotionLike"
import { BoxFrameTicket } from "@site/src/components/BoxFrameTicket"
import { useSampleCode } from "@site/src/hooks/useSampleCode"
import CodeBlock from "@theme/CodeBlock"
import React, { FC, useState } from "react"

type WidgetType =
  | "CARD"
  | "TICKET"
  | "EMOTION_FIVE"
  | "EMOTION_HAND"
  | "EMOTION_LIKE"

export const BoxHomeFrameWidget: FC = () => {
  const [widgetType, setWidgetType] = useState<WidgetType>("CARD")

  const sampleCode = useSampleCode(widgetType)

  return (
    <Stack direction={"row"} justifyContent={"center"}>
      <Stack
        spacing={4}
        sx={{ width: "100%", maxWidth: "52rem", px: 4, py: 8 }}
      >
        <Grid container direction={"row"} justifyContent={"center"} spacing={2}>
          <Grid item>
            <Chip
              label={"ミックス"}
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
              color={widgetType === "EMOTION_HAND" ? "primary" : "default"}
              onClick={() => {
                setWidgetType("EMOTION_HAND")
              }}
            />
          </Grid>
          <Grid item>
            <Chip
              label={"いいねボタン"}
              color={widgetType === "EMOTION_LIKE" ? "primary" : "default"}
              onClick={() => {
                setWidgetType("EMOTION_LIKE")
              }}
            />
          </Grid>
        </Grid>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{ width: "100%" }}
        >
          <Box sx={{ flex: 1, height: "100%" }}>
            {widgetType === "CARD" && <BoxFrameCard />}
            {widgetType === "TICKET" && <BoxFrameTicket />}
            {widgetType === "EMOTION_FIVE" && <BoxFrameEmotion />}
            {widgetType === "EMOTION_HAND" && <BoxFrameEmotionHand />}
            {widgetType === "EMOTION_LIKE" && <BoxFrameEmotionLike />}
          </Box>
          <Box sx={{ flex: 1, height: "20rem", overflow: "auto" }}>
            <BoxFrame>
              <CodeBlock
                className={"nocker-home-code-block"}
                language={"tsx"}
                showLineNumbers
              >
                {sampleCode}
              </CodeBlock>
            </BoxFrame>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )
}
