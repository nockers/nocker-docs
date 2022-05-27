import { Box, Grid, Stack } from "@mui/material"
import { BoxHomeFeature } from "@site/src/components/BoxHomeFeature"
import React, { FC } from "react"

export const BoxHomeFeatures: FC = () => {
  const homeFeatures = [
    {
      title: "Easy to Use",
      Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
      description: (
        <>
          Docusaurus was designed from the ground up to be easily installed and
          used to get your website up and running quickly.
        </>
      ),
    },
    {
      title: "Focus on What Matters",
      Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
      description: (
        <>
          Docusaurus lets you focus on your docs, and we&apos;ll do the chores.
          Go ahead and move your docs into the <code>docs</code> directory.
        </>
      ),
    },
    {
      title: "Powered by React",
      Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
      description: (
        <>
          Extend or customize your website layout by reusing React. Docusaurus
          can be extended while reusing the same header and footer.
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
