import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "../components/Loader/Loader";
import Layout from "../components/Layout";
import "../styles/globals.css";
//Redux
import store from "../store";
import { Provider } from "react-redux";

const Loading = () => {
  const router = useRouter();
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const HandleStart = (url) => url !== router.asPath && setLoading(true);
    const HandleComplete = (url) => url == router.asPath && setLoading(false);

    router.events.on("routeChangeStart", HandleStart);
    router.events.on("routeChangeComplete", HandleComplete);
    router.events.on("routeChangeError", HandleComplete);

    return () => {
      router.events.off("routeChangeStart", HandleStart);
      router.events.off("routeChangeComplete", HandleComplete);
      router.events.off("routeChangeError", HandleComplete);
    };
  });

  return Loading && <Loader />;
};

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Loading />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
