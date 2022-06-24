import CableTwoToneIcon from "@mui/icons-material/CableTwoTone"
import DesignServicesTwoToneIcon from "@mui/icons-material/DesignServicesTwoTone"
import InterestsTwoToneIcon from "@mui/icons-material/InterestsTwoTone"
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone"
import { Box, Grid, Stack, Typography } from "@mui/material"
import { PaperFeature } from "@site/src/components/PaperFeature"
import React, { FC } from "react"

export const BoxHomeFeatures: FC = () => {
  return (
    <Stack spacing={4} sx={{ py: 8 }}>
      <Box sx={{ px: { xs: 2, md: 4 } }}>
        <Typography
          component={"h2"}
          variant={"h3"}
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "3rem" },
          }}
        >
          {"Features"}
        </Typography>
      </Box>
      <Box sx={{ px: { xs: 2, md: 4 } }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4} lg={3}>
            <PaperFeature
              title={"Tickets"}
              isActive={true}
              icon={<DesignServicesTwoToneIcon sx={{ display: "block" }} />}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <PaperFeature
              title={"Emotions"}
              isActive={true}
              icon={<DesignServicesTwoToneIcon sx={{ display: "block" }} />}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <PaperFeature
              title={"FAQ"}
              isActive={false}
              icon={<SettingsTwoToneIcon sx={{ display: "block" }} />}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <PaperFeature
              title={"NPS"}
              isActive={false}
              icon={<CableTwoToneIcon sx={{ display: "block" }} />}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <PaperFeature
              title={"Release Notes"}
              isActive={false}
              icon={<InterestsTwoToneIcon sx={{ display: "block" }} />}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <PaperFeature
              title={"News"}
              isActive={false}
              icon={<SettingsTwoToneIcon sx={{ display: "block" }} />}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <PaperFeature
              title={"Feature Voting"}
              isActive={false}
              icon={<SettingsTwoToneIcon sx={{ display: "block" }} />}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <PaperFeature
              title={"Chat"}
              isActive={false}
              icon={<SettingsTwoToneIcon sx={{ display: "block" }} />}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <PaperFeature
              title={"Forms"}
              isActive={false}
              icon={<SettingsTwoToneIcon sx={{ display: "block" }} />}
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  )
}
