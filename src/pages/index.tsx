import { Stack } from "@mui/material"
import { BoxHomeFeatures } from "@site/src/components/BoxHomeFeatures"
import { BoxHomeHeader } from "@site/src/components/BoxHomeHeader"
import { BoxHomeHowToUse } from "@site/src/components/BoxHomeHowToUse"
import { BoxHomeWidgetSample } from "@site/src/components/BoxHomeWidgetSample"
import Layout from "@theme/Layout"
import React, { FC } from "react"

const Home: FC = () => {
  return (
    <Layout description={"Description will go into a meta tag in <head />"}>
      <BoxHomeHeader />
      <Stack
        component={"main"}
        sx={{ maxWidth: "80rem", width: "100%", mx: "auto" }}
      >
        <BoxHomeWidgetSample />
        <BoxHomeHowToUse />
        <BoxHomeFeatures />
      </Stack>
    </Layout>
  )
}

export default Home
