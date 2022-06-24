import { Stack, Typography } from "@mui/material"
import React, { FC } from "react"

type WidgetType =
  | "CARD"
  | "TICKET"
  | "EMOTION_FIVE"
  | "EMOTION_HAND"
  | "EMOTION_LIKE"

export const BoxHomeHowToUse: FC = () => {
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
        {"How to Integrate"}
      </Typography>
      <iframe
        src="https://codesandbox.io/embed/nock-widget-wvrduy?fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: "100%",
          height: "500px",
          border: 0,
          borderRadius: "8px",
          overflow: "hidden",
          display: "block",
        }}
        title="Nock widget-fab"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </Stack>
  )
}
