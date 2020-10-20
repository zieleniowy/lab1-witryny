import React from 'react';
import dictionary from '../src/dictionary';
import AboutMeCard from '../src/AboutMeCard';
import {Container, Box, Grid, Typography, Link} from '@material-ui/core';
import CircleCard from '../src/CircleCard';
import { MaterialUI, NextJS } from '../src/customIcons';

export default function Index() {
  return (
    <Container>
      <Box my={4}>
        <Grid container>
            <Grid xs={12} md={6}>
              <Box pb={4}>
                <AboutMeCard backgroundSrc={'/img/background.jpg'} profileSrc={'/img/profile.jpg'} i18n={dictionary.aboutMe} />
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Box pb={4}>
                <CircleCard color="secondary" icon={MaterialUI} header="Material-UI">
                  <Typography>{dictionary.materialAbout} <Link href="https://material-ui.com" target="_blank">Link do Material-UI</Link></Typography>
                </CircleCard>
              </Box>
              <CircleCard color="primary" icon={NextJS} header="NextJS">
                <Typography>{dictionary.nextJSAbout} <Link href="https://nextjs.org" target="_blank">Link do NextJS</Link></Typography>
              </CircleCard>
            </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
