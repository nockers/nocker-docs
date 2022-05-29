import { colors, Paper } from "@mui/material"
import React, { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const PaperFrame: FC<Props> = (props) => {
  return (
    <Paper
      sx={{
        backgroundColor(theme) {
          return theme.palette.mode === "dark"
            ? colors.grey[800]
            : colors.blue[100]
        },
        borderRadius: 1,
      }}
    >
      {props.children}
    </Paper>
  )
}
