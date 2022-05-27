import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { Box, Button, Stack, Typography } from "@mui/material"
import React, { FC } from "react"

export const BoxHomeHeader: FC = () => {
  const { siteConfig } = useDocusaurusContext()

  const storybookURL = "//storybook.nocker.dev/?path=/story/nockercard--default"

  return (
    <Box component={"header"} sx={{ py: 16 }}>
      <Stack spacing={4} alignItems={"center"}>
        <Stack spacing={1}>
          <Typography
            component={"h1"}
            variant={"h1"}
            sx={{ textAlign: "center" }}
          >
            {siteConfig.title}
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            {siteConfig.tagline}
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} spacing={2}>
          <Link to="/docs">
            <Button variant={"contained"}>{"スタートガイド"}</Button>
          </Link>
          <Link href={storybookURL}>
            <Button variant={"outlined"}>{"サンプル"}</Button>
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}
