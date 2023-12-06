import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import style from './style.module.css';

export default function MainPage() {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="raw"
        alignItems="center"
        textAlign="center"
        sx={{
          margin: "auto",
          marginTop: "5vh",
          marginLeft: "20px",
          gap: "20px",
        }}
      >
        <Button variant="contained">
          <Link style= {{textDecoration: 'none', color: 'inherit'}} className={style.btn1} to="/task1">Задание 1</Link>
        </Button>
        <Button variant="contained">
           <Link style= {{textDecoration: 'none', color: 'inherit'}} to="/task2">Задание 2</Link>{" "} 
        </Button>
      </Box>
    </div>
  );
}
