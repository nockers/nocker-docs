import { Box, Paper, Stack, Typography } from "@mui/material"
import React, { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
  icon: ReactNode
  title: string
}

export const PaperFeature: FC<Props> = (props) => {
  return (
    <Paper variant={"outlined"} sx={{ p: 3 }}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant={"h5"} fontWeight={"bold"}>
          {props.title}
        </Typography>
        <Box>{props.icon}</Box>
      </Stack>
      <Box>{props.children}</Box>
    </Paper>
  )
}
