import { Box, colors, Paper, Stack, Typography } from "@mui/material"
import React, { FC, ReactNode } from "react"

type Props = {
  icon: ReactNode
  title: string
  isActive: boolean
}

export const PaperFeature: FC<Props> = (props) => {
  return (
    <Paper
      variant={"outlined"}
      sx={{
        p: 2,
        background() {
          return props.isActive ? colors.blue[100] : ""
        },
        opacity: props.isActive ? 1 : 0.5,
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography component={"h1"} fontWeight={"bold"}>
          {props.title}
        </Typography>
        <Box>{props.icon}</Box>
      </Stack>
    </Paper>
  )
}
