import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";

export default function TextItem({ item }) {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
      }}
    >
      <Card
        sx={{
          width: 300,
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.5)",
        }}
      >
        <CardContent style={{ flex: "1 0 auto" }}>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            {item.header}
          </Typography>
          <Typography variant="body2">
            <ul>
              {item.options.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <br />
          </Typography>
        </CardContent>
        <CardActions>{item.text}</CardActions>
      </Card>
    </Box>
  );
}
