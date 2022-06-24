import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material"
import { BoxPreview } from "@site/src/components/BoxPreview"
import { BoxPreviewCard } from "@site/src/components/BoxPreviewCard"
import { BoxPreviewEmotion } from "@site/src/components/BoxPreviewEmotion"
import { BoxPreviewEmotionHand } from "@site/src/components/BoxPreviewEmotionHand"
import { BoxPreviewEmotionLike } from "@site/src/components/BoxPreviewEmotionLike"
import { BoxPreviewTicket } from "@site/src/components/BoxPreviewTicket"
import { useSampleCode } from "@site/src/hooks/useSampleCode"
import CodeBlock from "@theme/CodeBlock"
import React, { FC, useState } from "react"

type WidgetType =
  | "CARD"
  | "TICKET"
  | "EMOTION_FIVE"
  | "EMOTION_HAND"
  | "EMOTION_LIKE"

export const BoxHomeWidgetSample: FC = () => {
  const [widgetType, setWidgetType] = useState<WidgetType>("CARD")

  const sampleCode = useSampleCode(widgetType)

  return (
    <Stack spacing={4} sx={{ width: "100%", px: { xs: 2, md: 4 }, py: 8 }}>
      <Typography
        component={"h2"}
        variant={"h3"}
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2rem", sm: "3rem" },
        }}
      >
        {"Easy to Use"}
      </Typography>
      <Grid
        container
        direction={"row"}
        spacing={1}
        sx={{
          marginLeft: "-0.5rem !important",
        }}
      >
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
        {/* <Grid item>
            <Chip
              label={"いいねボタン"}
              color={widgetType === "EMOTION_LIKE" ? "primary" : "default"}
              onClick={() => {
                setWidgetType("EMOTION_LIKE")
              }}
            />
          </Grid> */}
      </Grid>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ width: "100%" }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: "24rem" },
            height: "20rem",
          }}
        >
          {widgetType === "CARD" && <BoxPreviewCard />}
          {widgetType === "TICKET" && <BoxPreviewTicket />}
          {widgetType === "EMOTION_FIVE" && <BoxPreviewEmotion />}
          {widgetType === "EMOTION_HAND" && <BoxPreviewEmotionHand />}
          {widgetType === "EMOTION_LIKE" && <BoxPreviewEmotionLike />}
        </Box>
        <Box
          sx={{
            flex: 1,
            height: { xs: "20rem", sm: "20rem" },
            overflow: "auto",
          }}
        >
          <BoxPreview>
            <CodeBlock
              className={"nocker-home-code-block"}
              language={"tsx"}
              showLineNumbers
            >
              {sampleCode}
            </CodeBlock>
          </BoxPreview>
        </Box>
      </Stack>
      <Stack direction={"row"} justifyContent={"flex-end"}>
        <a
          href={"https://mui.storybook.nocker.dev/?path=/story/widget--default"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <Button variant={"contained"}>{"Open Storybook"}</Button>
        </a>
      </Stack>
    </Stack>
  )
}
