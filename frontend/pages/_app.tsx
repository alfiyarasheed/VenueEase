// /pages/_app.tsx
// import '../app/globals.css';  // Import global CSS (if you have a global CSS file)
import type { AppProps } from 'next/app';
// import '../styles/style.css'; // Adjust the path to your actual CSS file
const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default MyApp;
