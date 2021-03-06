import React from 'react';
import Chart from 'react-google-charts';

import Info from '../Info';
import '../Styles.css';

const EducationResults = ({ countryEduYears, worldEduYears, eduYears }) => {
  let country = 0;
  let countryName = '';
  let world = 0;
  let info = '';

  if (countryEduYears.value) {
    country = countryEduYears.value;
    countryName = countryEduYears.country.value;
  }

  if (worldEduYears) world = worldEduYears.value;

  info = worldEduYears.info;
  const yearInfoWorld = `World, ${worldEduYears.date}`;
  const yearInfoCountry = countryEduYears.date;

  return (
    <>
      <Chart
        height='400px'
        chartType='ColumnChart'
        loader={<div>Loading Chart</div>}
        data={[
          ['Education years', 'Education'],
          [yearInfoWorld, world],
          [
            !countryName
              ? 'No Country Data'
              : `${countryName}, ${yearInfoCountry}`,
            country
          ],
          ['Your education years', eduYears]
        ]}
        options={{
          backgroundColor: { fill: 'transparent' },
          fontSize: '18',
          textStyle: { color: 'white' },
          title: 'Average education years',
          titleTextStyle: {
            color: '#FFF',
            bold: false
          },
          colors: ['#1B7742'],
          legend: { position: 'none' },
          tooltip: { isHtml: true, trigger: 'visible', value: 'testi' },
          hAxis: {
            title: '',
            titleTextStyle: { color: 'white' },
            minValue: 0,
            gridlines: { count: 0, color: 'transparent' },
            textStyle: { color: 'white' },
            baselineColor: 'white'
          },
          vAxis: {
            title: 'Years',
            titleTextStyle: { color: 'white', italic: false },
            minValue: 20,
            gridlines: { count: 0, color: 'transparent' },
            textStyle: { color: 'white' },
            viewWindow: { min: 0 },
            viewWindowMode: 'pretty',
            baselineColor: 'white'
          }
        }}
      />
      <Info dataInfo={info} />
    </>
  );
};

export default EducationResults;
