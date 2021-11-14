import { Fragment } from "react";
import Head from "next/head";
const MetaData = ({ title }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        {/*<meta name="theme-color" content="purple" />*/}
        <meta
          name="description"
          content="We provide makeup artists &amp; beauticians at your home"
        />
        <meta name="lang" content="en" />
        <meta
          name="keywords"
          content="makeup, makeover, beaty, beauty-parlour, home makeup, beauty parlours near me, makeup artists near me"
        />
      </Head>
    </Fragment>
  );
};

export default MetaData;
