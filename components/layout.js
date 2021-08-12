import dynamic from "next/dynamic";
import Alert from "../components/alert";
import Meta from "../components/meta";
import Icon from "@mdi/react";
import { mdiMoonWaxingCrescent, mdiWeatherSunny } from "@mdi/js";
const Footer = dynamic(import("../components/footer"));
import { useEffect } from "react";

export default function Layout({ preview, children, darkMode, setDarkMode }) {
    useEffect(() => {
        if (window !== undefined) {
            var ads = document.getElementsByClassName("adsbygoogle").length;
            if (ads.length < 1) {
                (adsbygoogle = window.adsbygoogle || []).push({});
            }
        }
    });
    return (
        <>
            <Meta />
            <div className="min-h-screen text-primary">
                <div className="w-24 h-24 fixed mx-12 top-8 z-10 hidden md:block">
                    <Icon
                        onClick={() => setDarkMode(!darkMode)}
                        className="cursor-pointer relative transition-all duration-500 ease-in-out"
                        path={
                            darkMode ? mdiMoonWaxingCrescent : mdiWeatherSunny
                        }
                        size={2}
                        color={darkMode ? "white" : "black"}
                    />
                </div>
                <Alert preview={preview} />
                <div className="w-full xl:w-5/6 mx-auto z-10">
                    <main>{children}</main>
                </div>
            </div>
            <Footer darkMode={darkMode} />
        </>
    );
}
