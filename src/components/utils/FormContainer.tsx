import React, { ReactNode } from "react";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";

interface Props {
  children: ReactNode;
  formTitle: string;
  y?: string;
  hide?: string;
  x?: string;
}

function FormContainer({
  formTitle,
  children,
  y = "3.9rem",
  x = "2.5rem",
  hide = "block",
}: Props) {
  return (
    <Paper
      sx={{
        maxWidth: "37.2rem",
        borderRadius: "1.25rem",
        overflow: "hidden",
        marginY: "2.1rem",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          width: "100%",
          background: "#D0F7FA",
          paddingX: "2.5rem",
          paddingY: "1.25rem",
          display: hide,
        }}
      >
        {formTitle}
      </Typography>

      <Box
        sx={{
          paddingX: x,
          paddingY: y,
        }}
      >
        {children}
      </Box>
    </Paper>
  );
}

export default FormContainer;
