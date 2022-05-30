import { Box, Grid, Stack } from "@mui/material"
import { BoxHomeFeature } from "@site/src/components/BoxHomeFeature"
import React, { FC } from "react"

export const BoxHomeWidgetFunctions: FC = () => {
  const homeFeatures = [
    {
      title: "すぐに使える",
      Svg: require("@site/static/images/undraw_docusaurus_mountain.svg")
        .default,
      description: (
        <>
          数行のコードですぐに導入できて、テーマや機能のカスタマイズも出来ます。
        </>
      ),
    },
    {
      title: "オープンソース",
      Svg: require("@site/static/images/undraw_docusaurus_tree.svg").default,
      description: (
        <>NockerのウィジェットはOSSのライブラリです。無料で利用できます。</>
      ),
    },
    {
      title: "バックエンド",
      Svg: require("@site/static/images/undraw_docusaurus_react.svg").default,
      description: (
        <>
          Nockerは送信されたフィードバックを管理する為のAPIと管理画面を提供しています。
        </>
      ),
    },
  ]

  return (
    <Box component={"section"}>
      <Stack direction={"column"} alignItems={"center"}>
        <Box sx={{ maxWidth: "64rem" }}>
          <Grid container spacing={2} justifyContent={"center"}>
            {homeFeatures.map((props, i) => (
              <Grid key={i} item xs={12} md={4}>
                <BoxHomeFeature
                  title={props.title}
                  Svg={props.Svg}
                  description={props.description}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Box>
  )
}
