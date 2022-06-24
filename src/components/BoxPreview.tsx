import { colors, Paper, Stack } from "@mui/material"
import React, { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const BoxPreview: FC<Props> = (props) => {
  return (
    <Paper
      sx={{
        height: "100%",
        overflow: "hidden",
        background(theme) {
          return theme.palette.mode === "dark"
            ? colors.grey[800]
            : "repeating-linear-gradient(125deg, #b39ddb 0 25%, #90caf9 75% 100%)"
        },
        borderRadius: 1,
      }}
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%", height: "100%" }}
      >
        {props.children}
      </Stack>
    </Paper>
  )
}
