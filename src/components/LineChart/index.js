import {CanvasJSChart} from 'canvasjs-react-charts'
import React from 'react';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import {Chart, Filler} from 'chart.js';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const config = {
    responsive: true,
    datasetStrokeWidth : 3,
    pointDotStrokeWidth : 4,
    options: {
        scales: {
            y: {
                ticks:{
                    color: '#fff'
                }
            },
              x: {
                ticks:{
                    color: '#fff'
                }
            }
        }
    },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true
    },
  },
};

const labels = ['00:00:00', '03:00:00', '06:00:00', '09:00:00', '12:00:00', '15:00:00', '18:00:00','21:00:00'];

export default function LineChart({data_test}) {
let temperatureArray = [];
let humidityArray = [];
let windArray = [];


data_test.forEach(element => {
    temperatureArray.push(element.temp);
    humidityArray.push(element.humidity);
    windArray.push(element.speed);
});

const data = {
  labels,
  datasets: [
    {
        label: 'Temperature',
        data: temperatureArray,
         borderColor: "#fff",
        backgroundColor: 'rgba(128,191,157,0.8)',
        borderWidth: 2,
        pointColor : "#fff",
        pointStrokeColor : "#ff6c23",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#ff6c23",
        fill: true
    },
    {
        label: 'Humidity',
        data: humidityArray,
        backgroundColor : 'rgba(255,250,179,0.8)', // Put the gradient here as a fill color
        borderColor : "#fff",
        pointColor : "#fff",
        pointStrokeColor : "#ff6c23",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#ff6c23",
        fill: true
    },
    {
        label: 'Speed',
        data: windArray,
        backgroundColor : 'rgba(255,250,179,0.8)', // Put the gradient here as a fill color
        borderColor : "#fff",
        pointColor : "#fff",
        pointStrokeColor : "#ff6c23",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#ff6c23",
        fill: true
    },
  ],
};

  return <Line options={config} data={data} />;
}