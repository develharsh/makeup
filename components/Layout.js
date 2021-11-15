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
        <link rel="shortcut icon" href="/logomain.png" type="image/x-icon" />
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
