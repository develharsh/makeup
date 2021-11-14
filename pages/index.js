import { Fragment } from "react";
import MetaData from "../utils/MetaData";
import Link from "next/link";
import HomeCarousel from "../components/HomeCarousel";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  const { loading } = useSelector((state) => state.auth);
  return (
    <Fragment>
      <MetaData title="Blashio - Makeup artists &amp; beauticians at Home | www.blashio.vercel.app" />
      <Loading show={loading} />
      <HomeCarousel />
      <div className="homeSpecsDiv dFlexWrap justfyeven white">
        <div className="home-1">
          <div>
            <img src="/bridal-sample.jpg" className="homeSpecsImg" alt="..." />
          </div>
          <p>
            <span className="homeSpecsDivPSpan">Bridal Makeup</span>
            <br></br>
            We have the registered professionally trained &amp; makeup artists
            and beauticians.
            <br></br>A perfect artist for your bridal ceremony.
          </p>
        </div>
        <div className="home-2">
          <div>
            <img src="/party-sample.jpg" className="homeSpecsImg" alt="..." />
          </div>
          <p>
            <span className="homeSpecsDivPSpan">Party Makeup</span>
            <br></br>
            We have the registered professionally trained &amp; makeup artists
            and beauticians.
            <br></br>Which will we helping you stand out by your look in the
            party.
          </p>
        </div>
        <div className="home-3">
          <div>
            <img src="/normal-sample.jpeg" className="homeSpecsImg" alt="..." />
          </div>
          <p>
            <span className="homeSpecsDivPSpan">Regular Makeup/Salon</span>
            <br></br>
            We have the registered professionally trained &amp; makeup artists
            and beauticians.
            <br></br>A perfect artist for your regular makeover.
          </p>
        </div>
      </div>
      <div className="dFlex justfycent homeWhatsapp">
        <Link href="http://wa.me/+917055335905?text=Hey%20Blashio,%0AI%20want%20to%20ask%20about:%0A">
          <a target="_blank">
            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
            >
              Ask us on Whatsapp
            </Button>
          </a>
        </Link>
      </div>
      <div style={{ height: "100px" }}></div>
    </Fragment>
  );
};

export default index;
