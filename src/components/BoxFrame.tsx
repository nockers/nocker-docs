import { colors, Paper, Stack } from "@mui/material"
import React, { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const BoxFrame: FC<Props> = (props) => {
  return (
    <Paper
      sx={{
        height: "100%",
        overflow: "hidden",
        backgroundColor(theme) {
          return theme.palette.mode === "dark"
            ? colors.grey[800]
            : colors.blue[100]
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
