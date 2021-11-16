import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  signup,
  clearErrors,
  clearMessages,
} from "../../redux/actions/adminActions";
import MetaData from "../../utils/MetaData";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import SendNotif from "../../utils/SendNotif";

const Signup = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, admin, message, error } = useSelector(
    (state) => state.admin
  );
  useEffect(() => {
    if (error) {
      dispatch(SendNotif("error", error));
      dispatch(clearErrors());
    }
    if (admin) {
      if (message) {
        dispatch(SendNotif("success", message));
        dispatch(clearMessages());
      }
      router.push("/a/dashboard");
    }
  }, [dispatch, error, message, admin, router]);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const { name, email, phone, password } = values;
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && phone.length >= 10)
      dispatch(SendNotif("warning", "Phone must be 10 digit long."));
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    if (!name) return dispatch(SendNotif("error", "Name can't be empty."));
    if (name.length > 30)
      return dispatch(
        SendNotif("error", "Name length can't exceed 30 letters.")
      );
    if (!email.includes("@"))
      return dispatch(SendNotif("error", "Invalid Email."));
    if (phone.length > 10)
      return dispatch(SendNotif("error", "Phone must be 10 digit long."));
    if (password.length < 8)
      return dispatch(
        SendNotif("error", "Password must be atleast 8 letters.")
      );
    dispatch(signup(name, email, phone, password));
  };
  return (
    <Fragment>
      <MetaData title="Admin Signup | Blashio | www.blashio.vercel.app" />
      <Loading show={loading} />
      <div style={{ height: "4vh" }}></div>
      <Typography
        variant="h6"
        display="block"
        sx={{ textAlign: "center", marginBottom: "20px" }}
        gutterBottom
      >
        New Admin
      </Typography>
      <div className="admSignuPmainDiv">
        <Stack>
          <FormControl className="admSignuPformControl">
            <Input
              type="text"
              placeholder="Your Name"
              className="admSignuPinput"
              name="name"
              value={name}
              onChange={(e) => handleChange(e)}
              startAdornment={
                <InputAdornment position="start">
                  <PersonIcon color="secondary" />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className="admSignuPformControl">
            <Input
              type="email"
              placeholder="Your Email"
              className="admSignuPinput"
              name="email"
              value={email}
              onChange={(e) => handleChange(e)}
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon color="secondary" />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className="admSignuPformControl">
            <Input
              type="text"
              placeholder="Your Phone"
              className="admSignuPinput"
              sx={{ marginBottom: "9px" }}
              name="phone"
              value={phone}
              onChange={(e) => handleChange(e)}
              startAdornment={
                <InputAdornment position="start">
                  <PhoneIphoneIcon color="secondary" />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className="admSignuPformControl">
            <Input
              type="password"
              placeholder="Password"
              className="admSignuPinput"
              sx={{ marginBottom: "9px" }}
              name="password"
              value={password}
              onChange={(e) => handleChange(e)}
              startAdornment={
                <InputAdornment position="start">
                  <VpnKeyIcon color="secondary" />
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography
            variant="caption"
            display="block"
            sx={{ textAlign: "center", marginBottom: "41px" }}
            gutterBottom
          >
            Your information is always safe with us :)
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            endIcon={<PersonAddIcon />}
            sx={{ marginTop: "10px" }}
            onClick={handleSubmit}
          >
            Register
          </Button>
          <Link href="/a/login">
            <a
              className="admSignuPLink mt-2 textCenter fontwb"
              style={{ color: "tomato" }}
            >
              Already Admin? Login
            </a>
          </Link>
        </Stack>
      </div>
      <div style={{ height: "120px" }}></div>
    </Fragment>
  );
};

export default Signup;
