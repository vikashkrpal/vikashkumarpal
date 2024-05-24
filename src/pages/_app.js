import 'bootstrap/dist/css/bootstrap.min.css';
import  '../utils/styles/global.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyles from "../utils/styles/GlobalStyles";
import {wrapper} from "../redux/store";

function MyApp({ Component, pageProps }) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={store.__persistor}>
        <GlobalStyles />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
    </>;
}

export default MyApp;
