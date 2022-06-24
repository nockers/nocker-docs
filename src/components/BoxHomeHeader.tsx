import Link from "@docusaurus/Link"
import Translate from "@docusaurus/Translate"
import useBaseUrl from "@docusaurus/useBaseUrl"
import { Box, Button, Paper, Stack, Typography } from "@mui/material"
import { BoxPreview } from "@site/src/components/BoxPreview"
import CodeBlock from "@theme/CodeBlock"
import React, { FC } from "react"

export const BoxHomeHeader: FC = () => {
  const imgSrcSample = useBaseUrl("/images/sample.png")

  const sampleCode = `import {
    WidgetFab,
    Nocker,
    NockerProvider
  } from '@nocker/mui'

  const client = new Nocker({
    projectId: "<YOUR_PROJECT_ID>"
  })

  return (
    <NockerProvider client={client}>
      <WidgetFab />
    </NockerProvider>
  )`

  return (
    <Stack
      component={"header"}
      sx={{ pt: 4, pb: 8, maxWidth: "80rem", mx: "auto" }}
      direction={{ xs: "column", md: "row" }}
      alignItems={"center"}
    >
      <Stack spacing={4} sx={{ flex: { md: 1.5, lg: 1 }, width: "100%" }}>
        <Stack
          spacing={4}
          sx={{ width: "100%", maxWidth: { xs: "100%", lg: 580 } }}
          alignItems={"flex-start"}
        >
          <Stack sx={{ px: { xs: 2, sm: 4 } }} spacing={{ xs: 2, lg: 4 }}>
            <Typography
              component={"h1"}
              variant={"h3"}
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2rem", sm: "3rem" },
                whiteSpace: "pre-wrap",
                color: "transparent",
                letterSpacing: "2px",
                background:
                  "repeating-linear-gradient(90deg, #b39ddb 0 25%, #90caf9 75% 100%)",
                backgroundClip: "text",
              }}
            >
              {"Feedback Widget\nfor Web/Flutter"}
            </Typography>
            <Typography>
              <Translate>
                {
                  "Nocker widget is a simple and easiest way to collect feedback from your customers on your app."
                }
              </Translate>
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent={"flex-start"}
              spacing={2}
            >
              <Link to="/docs/widget">
                <Button variant={"contained"}>{"Get started for Free"}</Button>
              </Link>
              <Box
                sx={{
                  borderWidth: 1,
                  borderColor: (theme) => theme.palette.primary.main,
                  borderStyle: "solid",
                  borderRadius: "20px",
                  backgroundColor: (theme) => theme.palette.background.paper,
                  px: 2,
                  py: 0.5,
                }}
              >
                <Stack sx={{ justifyContent: "center", height: "100%" }}>
                  <Typography>{"$ yarn add @nocker/mui"}</Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Box
            sx={{
              width: "100%",
              overflow: "auto",
              px: { xs: 2, md: 4 },
              pb: 2,
            }}
          >
            <BoxPreview>
              <CodeBlock
                className={"nocker-home-code-block"}
                language={"tsx"}
                showLineNumbers
              >
                {sampleCode}
              </CodeBlock>
            </BoxPreview>
          </Box>
        </Stack>
      </Stack>
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "block" },
        }}
      >
        <Paper sx={{ width: { xs: "100%", md: "200%" } }} variant={"outlined"}>
          <Box
            component={"img"}
            src={imgSrcSample}
            sx={{ borderRadius: 1, display: "block" }}
          />
        </Paper>
      </Box>
    </Stack>
  )
}
