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
      <Head></Head>
      <NavBar />
      <MainDrawer />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
