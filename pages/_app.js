import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<div className="max-w-7xl mx-auto py-40">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
