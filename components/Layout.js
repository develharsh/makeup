import NavBar from "./NavBar";
import Head from "next/head";
import MainDrawer from "./MainDrawer";
import Footer from "./Footer";
import Loading from "./Loading";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../redux/actions/userActions";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
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
      </Head>
      <NavBar />
      <MainDrawer />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
