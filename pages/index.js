import { Fragment } from "react";
import MetaData from "../utils/MetaData";
import Link from "next/link";
import HomeCarousel from "../components/HomeCarousel";

const index = () => {
  return (
    <Fragment>
      <MetaData title="Home of Alasca" />
      <HomeCarousel />
    </Fragment>
  );
};

export default index;
