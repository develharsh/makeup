import { Fragment } from "react";
import Head from "next/head";
const MetaData = ({ title }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="purple" />
        <meta name="description" content="Donot know" />
        <meta name="lang" content="en" />
        <meta name="keywords" content="en, sd, sd, sd, sds" />
      </Head>
    </Fragment>
  );
};

export default MetaData;
