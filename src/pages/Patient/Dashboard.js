import React from "react";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { faker } from "https://cdn.skypack.dev/@faker-js/faker";

import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const optionspie = {
  plugins: {
    title: {
      display: true,
      text: "Patient Distribution(Gender wise)",
    },
  },
  responsive: true,
};

export const datapie = {
  labels: ["Male", "Female", "Other"],
  datasets: [
    {
      label: "Person",
      data: [180, 150, 8],
      backgroundColor: ["rgba(0, 250, 0, 0.6)", "rgba(250, 0, 0, 0.6)", "rgba(75, 192, 192, 0.6)"],
      borderColor: ["rgba(0, 250, 0, 1)", "rgba(250, 0, 0, 1)", "rgba(75, 192, 192, 1)"],
      borderWidth: 1,
    },
  ],
};

export const optionsbar = {
  plugins: {
    title: {
      display: true,
      text: "Patients Distribution(Age wise)",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["0-9 Years", "10-19 Years", "20-59 Years", ">=60 Years"];
export const databar = {
  labels,
  datasets: [
    {
      label: "Male",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 2500 })),
      backgroundColor: "rgb(53, 162, 235)",
    },
    {
      label: "Female",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 2500 })),
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Others",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};

function Dashboard() {
  return (
    <Box component="div" sx={{ m: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box component="div" sx={{ px: 20 }}>
            <Pie data={datapie} options={optionspie} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Bar options={optionsbar} data={databar} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
