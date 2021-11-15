import NavBar from "./NavBar";
import Head from "next/head";
import MainDrawer from "./MainDrawer";
import Footer from "./Footer";
import Loading from "./Loading";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../redux/actions/userActions";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const [routeChanged, setRouteChanged] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setRouteChanged(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setRouteChanged(false);
  });
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <Head>
        <link
          async
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap"
        />
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-212908904-1">
        </script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-212908904-1');
      </script>
      </Head>
      <NavBar />
      <Loading show={routeChanged} />
      <MainDrawer />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
