import { Fragment } from "react";
import Link from "next/link";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BusinessIcon from "@mui/icons-material/Business";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Fragment>
      <div className="footerMainDiv dFlexWrap justfyeven">
        <div>
          <p>
            <AccountBalanceIcon />
            <Link href="/cancellation_refund_policy">
              <a> Cancellation &amp; Refund Policy</a>
            </Link>
          </p>
          <p>
            <PrivacyTipIcon />
            <Link href="/privacy_policy">
              <a> Privacy Policy</a>
            </Link>
          </p>
          <p>
            <ReceiptIcon />
            <Link href="/terms_conditions">
              <a> Terms &amp; Conditions</a>
            </Link>
          </p>
          <p>
            <BusinessIcon />
            <Link href="/about_us">
              <a> About Us</a>
            </Link>
          </p>
        </div>
        <div>
          <p>
            <AddBusinessIcon /> Vasant Kunj, New Delhi, India
          </p>
          <p>
            <PhoneIcon />
            <Link href="tel:+917668462359">
              <a> +91-7668462359</a>
            </Link>
          </p>
          <p>
            <EmailIcon />
            <Link href="mailto:contact.blashio@gmail.com">
              <a> contact.blashio@gmail.com</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="textCenter">
        <p>www.blashio.vercel.app</p>
        <p>&copy; 2021 Blashio</p>
      </div>
    </Fragment>
  );
};

export default Footer;
