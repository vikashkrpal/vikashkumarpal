import 'bootstrap/dist/css/bootstrap.min.css';
import  '../utils/styles/global.css';
import GlobalStyles from "../utils/styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyles />
    <Component {...pageProps} />
    </>;
}

export default MyApp;
