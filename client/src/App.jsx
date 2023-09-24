import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { CONTEXT_PATH } from "./utils/constant";
import { ColorModeContext, useMode } from "./core/theme";
import AppRoutes from "./AppRoutes";

function App() {
  const [theme, toggleColorMode] = useMode();

  return (
    <ColorModeContext.Provider value={toggleColorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename={CONTEXT_PATH}>
          <div className="App" id="App">
            <AppRoutes />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
