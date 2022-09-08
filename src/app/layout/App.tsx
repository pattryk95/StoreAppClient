import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../route-config";
import Header from "./Header";

function App()
{
  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function changeTheme()
  {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider
      theme={theme}
    >
      <CssBaseline />
      <Header changeTheme={changeTheme} isDarkModeChecked={darkMode} />
      <Container>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component />
            </Route>

          ))}
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
