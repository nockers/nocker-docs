import { Box, Stack, Typography } from "@mui/material"
import React, { ComponentProps, ComponentType, FC, ReactNode } from "react"

type Props = {
  title: string
  Svg: ComponentType<ComponentProps<"svg">>
  description: ReactNode
}

export const BoxHomeFeature: FC<Props> = (props) => {
  return (
    <Box sx={{ px: 4 }}>
      <Stack alignItems={"center"}>
        <props.Svg style={{ width: "200px", height: "200px" }} role="img" />
        <Stack spacing={2}>
          <Typography component={"h3"} variant={"h5"} textAlign={"center"}>
            {props.title}
          </Typography>
          <Typography textAlign={"center"}>{props.description}</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}
