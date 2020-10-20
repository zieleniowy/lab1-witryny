import React from 'react';
import dictionary from '../src/dictionary';
import {Container, Box, Grid, Button, Typography, Link, FormControlLabel, Switch, TextField } from '@material-ui/core';


export default function Index() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}><TextField name="first_name" label={dictionary.form.firstName} variant="outlined" fullWidth /></Grid>
            <Grid item xs={12} sm={6}><TextField name="last_name" label={dictionary.form.lastName} variant="outlined" fullWidth /></Grid>
            <Grid item xs={12} sm={6}><TextField name="phone_number" label={dictionary.form.phone} variant="outlined" fullWidth /></Grid>
            <Grid item xs={12} sm={6}><TextField name="email" label={dictionary.form.email} variant="outlined" fullWidth /></Grid>
            <Grid item xs={12}><TextField name="message" label={dictionary.form.message} variant="outlined" multiline fullWidth rows={6}/></Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    name="agreement"
                    color="primary"
                  />
                }
                label={dictionary.form.agreement}
              />
              <Box my={1}>
                <Button variant="contained" fullWidth color="primary">{dictionary.form.submit}</Button>
              </Box>
            </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
