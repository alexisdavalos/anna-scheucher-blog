import "../styles/index.scss";
import DarkMode from "../lib/darkModeContext";

export default function MyApp({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);
    return getLayout(
        <DarkMode>
            <Component {...pageProps} />
        </DarkMode>
    );
}
