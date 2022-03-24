import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./common/global-styles";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
