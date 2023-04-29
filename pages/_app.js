import '../styles/globals.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import Aos from 'aos';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        Aos.init();
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;
