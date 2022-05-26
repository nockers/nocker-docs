import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { Box, Button } from "@mui/material"
import HomepageFeatures from "@site/src/components/HomepageFeatures"
import Layout from "@theme/Layout"
import clsx from "clsx"
import React, { FC } from "react"
import styles from "./index.module.css"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
        <Button variant={"contained"}>{"TEXT"}</Button>
      </div>
    </header>
  )
}

const Home: FC = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={siteConfig.title}
      description={"Description will go into a meta tag in <head />"}
    >
      <HomepageHeader />
      <Box component={"main"}>
        <HomepageFeatures />
      </Box>
    </Layout>
  )
}

export default Home
