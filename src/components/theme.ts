import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D0F7FA",
    },
    secondary: {
      main: "#087B2F",
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            textTransform: "none",
            marginInline: "0.5rem",
            letterSpacing: "-0.006em",
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: "1.25rem",
            color: "#000",
          },
        },
        {
          props: { variant: "contained" },
          style: {
            textTransform: "capitalize",
            background: "#21B592",
            borderRadius: 5,
            marginInline: "0.5rem",
            letterSpacing: 1.3,
            color: "white",
          },
        },
      ],
    },
  },
});

export default theme;
