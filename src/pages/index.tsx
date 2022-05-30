import { Stack } from "@mui/material"
import { BoxHomeFeatures } from "@site/src/components/BoxHomeFeatures"
import { BoxHomeFrameWidget } from "@site/src/components/BoxHomeFrameWidget"
import { BoxHomeHeader } from "@site/src/components/BoxHomeHeader"
import Layout from "@theme/Layout"
import React, { FC } from "react"

const Home: FC = () => {
  return (
    <Layout description={"Description will go into a meta tag in <head />"}>
      <BoxHomeHeader />
      <BoxHomeFrameWidget />
      <Stack component={"main"} sx={{ pt: 8, pb: 12 }}>
        <BoxHomeFeatures />
      </Stack>
    </Layout>
  )
}

export default Home
