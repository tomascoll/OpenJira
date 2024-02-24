import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { EntriesProvider } from "@/context/entries";
import { UIProvider } from "@/context/ui";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "@/themes";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
    </SnackbarProvider>
  );
}
