import React from 'react';
import dictionary from '../src/dictionary';
import {Container, Box, Card, CardContent, Grid, Typography, Link} from '@material-ui/core';


export default function Index() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <Typography variant="h5">{dictionary.letter.recipient}</Typography>
                {dictionary.letter.address.map(line=><Typography key={line}>{line}</Typography>)}
              </Grid>
              <Grid xs={12} md={6}>
                <Typography align="right">{dictionary.letter.dateAndPlace}</Typography>
              </Grid>
              <Grid xs={12}>
                <Box py={2}>
                  <Typography align="justify">
                    {dictionary.letter.content}
                  </Typography>
                  <Typography variant="caption" component="p" align="right">
                    {dictionary.letter.caption}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
