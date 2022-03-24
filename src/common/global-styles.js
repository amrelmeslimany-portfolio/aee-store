import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/material";

export let theme = createTheme({
  palette: {
    primary: orange,
    dark: {
      main: "#1c1d1f",
    },
    tonalOffset: 0.1,
    action: {
      hover: orange[200],
    },
  },
  shape: {
    borderRadius: false,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export const linkRouterCss = {
  textDecoration: "none",
  color: "inherit",
};
