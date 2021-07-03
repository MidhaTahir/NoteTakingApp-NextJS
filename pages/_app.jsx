import "../src/globalStyles.css";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Nav from "../src/components/nav";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
