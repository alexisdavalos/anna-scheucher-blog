import axios from "axios";
// Next we make an 'instance' of it
const baseURL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.NEXT_PUBLIC_BLOG_URL;

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin",
    },
});

export default axiosInstance;
