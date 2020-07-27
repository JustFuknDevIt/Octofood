import Head from "next/head";
import Layout from "components/Layouts/Layout";

export default function Home() {
	return (
		<>
			<Head>
				<title>OctoFood</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<h1 className="title">
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>
			</Layout>
		</>
	);
}
