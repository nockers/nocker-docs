import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { Box, Button, Stack, Typography } from "@mui/material"
import React, { FC } from "react"

export const BoxHomeHeader: FC = () => {
  const { siteConfig } = useDocusaurusContext()

  const storybookURL =
    "https://mui.storybook.nocker.dev/?path=/story/widget--default"

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
          <Link to="/docs/widget">
            <Button variant={"contained"}>{"スタートガイド"}</Button>
          </Link>

          <Box
            sx={{
              borderWidth: 1,
              borderColor: (theme) => theme.palette.primary.main,
              borderStyle: "solid",
              borderRadius: "20px",
              backgroundColor: (theme) => theme.palette.background.paper,
              px: 2,
            }}
          >
            <Stack sx={{ justifyContent: "center", height: "100%" }}>
              <Typography>{"$ yarn add @nocker/mui"}</Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}
