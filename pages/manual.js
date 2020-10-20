import React from 'react';
import dictionary from '../src/dictionary';
import {Container, Box, Grid, Card, CardContent, CardHeader, Typography, Link} from '@material-ui/core';
import {Alert, AlertTitle} from '@material-ui/lab';
import Chart from 'chart.js';
import TableExample from '../src/TableExample';

const data =  {
  type: 'bar',
  data: {
      labels: ['czerwony', 'niebieski', 'żółty', 'zielony', 'fioletowy', 'pomarańczowy'],
      datasets: [{
          label: '# ulubione kolory studentów',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
};



export default function Manual() {
  let canvas = null;

  const setRef = el => canvas = el;
  React.useEffect(()=>{
    var myChart = new Chart(canvas, data);
  },[canvas])
  return (
    <Container>
      <Box my={4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <canvas ref={setRef} width="400" height="300"></canvas>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title={dictionary.manual.contentHeader}></CardHeader>
              <CardContent>
               <Typography>{dictionary.manual.content} <Link target="_blank" href="https://www.chartjs.org">https://www.chartjs.org</Link></Typography>
                <Alert severity="warning">
                  <AlertTitle>{dictionary.manual.warningTitle}</AlertTitle>
                  {dictionary.manual.warningContent}
                </Alert>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <TableExample />
          </Grid>
        </Grid>

      </Box>
    </Container>
  );
}
