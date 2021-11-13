import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastProvider placement="bottom-left" autoDismiss newestOnTop="true">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </Provider>
  );
}

export default MyApp;
