import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardMedia from '@mui/material/CardMedia';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Search } from "@mui/icons-material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export default function FullWidthGrid({values,Flage}) {
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [deathCases, setDeathCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");
  const [tests, setTestes] = useState("");
  const [entireCountry, setEntireCountry] = useState({});
  const [critical, setCritical] = useState("");

  console.log("value is ===",values);
  const [userInput, setUserInput] = useState("Afghanistan");

  const setData = ({
    country,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
    tests,
    
  }) => {
    setCountry(country);
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todayCases);
    setDeathCases(todayDeaths);
    setRecoveredCases(todayRecovered);
    setTestes(tests);
  };
  

useEffect(() => {
  setData(values);
}, [values])


  
  return (
    <Box sx={{ flexGrow: 1, mt: 5, m: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', }}>
        <CardContent sx={{ flex: '1 0 auto', alignItems: 'center',justifyContent: 'center' }}>
          <Typography component="div" variant="h5">
            {country}
          </Typography>
        </CardContent>
        {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
         
        </Box> */}
      </Box>
      <CardMedia
        component="img"
        sx={{ minWidth:160, height:115, justifyContent:"flex-end"}}
        image={Flage}
        alt="country"
      />
    </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ minWidth: 275, bgcolor: "yellow" }}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <Typography variant="h5" sx={{}}>
                  Total Cases
                </Typography>
                <Typography sx={{ mb: 1.5, alignItems: "center" }} variant="h6">
                  {cases}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ minWidth: 275, bgcolor: "red" }}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <Typography variant="h5" sx={{}}>
                  Total Deaths
                </Typography>
                <Typography sx={{ mb: 1.5, alignItems: "center" }} variant="h6">
                  {deaths}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ minWidth: 275, bgcolor: "yellowgreen" }}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <Typography variant="h5" sx={{}}>
                  Recovered
                </Typography>
                <Typography sx={{ mb: 1.5, alignItems: "center" }} variant="h6">
                  {recovered}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ minWidth: 275, bgcolor: "#9bde1f" }}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <Typography variant="h5" sx={{}}>
                  TodayCases
                </Typography>
                <Typography sx={{ mb: 1.5, alignItems: "center" }} variant="h6">
                  {todayCases}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ minWidth: 275, bgcolor: "#b00f0c" }}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <Typography variant="h5" sx={{}}>
                  TodayDeaths
                </Typography>
                <Typography sx={{ mb: 1.5, alignItems: "center" }} variant="h6">
                  {deathCases}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ minWidth: 275, bgcolor: "#10e817" }}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <Typography variant="h5" sx={{}}>
                  To day recovered Cases
                </Typography>
                <Typography sx={{ mb: 1.5, alignItems: "center" }} variant="h6">
                  {recoveredCases}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ minWidth: 275, bgcolor: "#c497bd" }}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <Typography variant="h5" sx={{}}>
                  Total Tests
                </Typography>
                <Typography sx={{ mb: 1.5, alignItems: "center" }} variant="h6">
                  {tests}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
