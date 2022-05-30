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
            sx={{
              textAlign: "center",
              color: "transparent",
              letterSpacing: "2px",
              background:
                "repeating-linear-gradient(90deg, #b39ddb 0 25%, #90caf9 75% 100%)",
              backgroundClip: "text",
            }}
          >
            {siteConfig.title}
          </Typography>
          <Typography sx={{ textAlign: "center", px: 4 }}>
            {siteConfig.tagline}
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} spacing={2}>
          <Link to="/docs/widget/html/installation">
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
