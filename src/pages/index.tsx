import CableTwoToneIcon from "@mui/icons-material/CableTwoTone"
import DesignServicesTwoToneIcon from "@mui/icons-material/DesignServicesTwoTone"
import InterestsTwoToneIcon from "@mui/icons-material/InterestsTwoTone"
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone"
import { Box, Stack, Typography } from "@mui/material"
import { BoxHomeFrameWidget } from "@site/src/components/BoxHomeFrameWidget"
import { BoxHomeHeader } from "@site/src/components/BoxHomeHeader"
import { PaperFeature } from "@site/src/components/PaperFeature"
import Layout from "@theme/Layout"
import React, { FC } from "react"

const Home: FC = () => {
  return (
    <Layout description={"Description will go into a meta tag in <head />"}>
      <BoxHomeHeader />
      <BoxHomeFrameWidget />
      <Stack component={"main"} sx={{ pt: 8, pb: 12 }}>
        <Stack direction={"row"} justifyContent={"center"}>
          <Stack
            sx={{ width: "100%", maxWidth: "64rem" }}
            direction={"row"}
            gap={2}
          >
            <Stack sx={{ flex: 1 }} gap={2}>
              <Box sx={{ p: 1 }} />
              <PaperFeature
                title={"ライブラリ"}
                icon={<DesignServicesTwoToneIcon fontSize={"large"} />}
              >
                <Typography sx={{ lineHeight: 1.75 }}>
                  {
                    "ScriptタグやReactコンポーネントなど様々な方法でウィジェットを導入できます。その他、VueやFlutterのライブラリも公開予定です。"
                  }
                </Typography>
              </PaperFeature>
              <PaperFeature
                title={"バックエンド"}
                icon={<CableTwoToneIcon fontSize={"large"} />}
              >
                <Typography>
                  {
                    "フィードバックを管理する為のデータベースと管理画面を提供しています。UIライブラリだけでも利用できます。"
                  }
                </Typography>
              </PaperFeature>
            </Stack>
            <Stack sx={{ flex: 1 }} gap={2}>
              <PaperFeature
                title={"アプリ連携"}
                icon={<InterestsTwoToneIcon fontSize={"large"} />}
              >
                <Typography>
                  {"DiscordやLINEと連携して通知を受け取ることが出来ます。"}
                </Typography>
              </PaperFeature>
              <PaperFeature
                title={"カスタマイズ"}
                icon={<SettingsTwoToneIcon fontSize={"large"} />}
              >
                <Typography>
                  {
                    "ウィジェットのテキストや配色はライブラリからも管理画面からもカスタマイズできます。"
                  }
                </Typography>
              </PaperFeature>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  )
}

export default Home
