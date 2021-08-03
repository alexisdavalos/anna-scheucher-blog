import "../styles/index.scss";
import { useRouter } from "next/router";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			<Head>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BLOG_URL}${router.asPath}`}
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
