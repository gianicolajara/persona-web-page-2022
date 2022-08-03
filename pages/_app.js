import Footer from "../components/Footer";
import Menu from "../components/Menu";
import DeviceContextProvider from "../contexts/devices.context";
import ThemeProvider from "../contexts/theme.context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DeviceContextProvider>
      <ThemeProvider>
        <Menu />
        <main className="mt-[65px]">
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </DeviceContextProvider>
  );
}

export default MyApp;
