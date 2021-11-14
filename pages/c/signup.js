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
} from "../../redux/actions/clientActions";
import MetaData from "../../utils/MetaData";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";

const Signup = () => {
  const { addToast } = useToasts();
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, client, message, error } = useSelector(
    (state) => state.client
  );
  useEffect(() => {
    if (error) {
      addToast(error, { appearance: "error" });
      dispatch(clearErrors());
    }
    if (client) {
      if (message) {
        addToast(message, { appearance: "success" });
        dispatch(clearMessages());
      }
      router.push("/");
    }
  }, [dispatch, error, message, client, router]);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const { name, email, phone, password } = values;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    if (!name) return addToast("Name can't be empty", { appearance: "error" });
    if (name.length > 30)
      return addToast("Name length can't exceed 30 letters.", {
        appearance: "error",
      });
    if (!email.includes("@"))
      return addToast("Invalid Email.", { appearance: "error" });
    if (phone.length !== 10)
      return addToast("Enter 10 digit long phone number.", {
        appearance: "error",
      });
    if (password.length < 8)
      return addToast("Password must be atleast 8 letters.", {
        appearance: "error",
      });
    dispatch(signup(name, email, phone, password));
  };
  return (
    <Fragment>
      <MetaData title="Signup User" />
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <div style={{ height: "4vh" }}></div>
          <Typography
            variant="h6"
            display="block"
            sx={{ textAlign: "center", marginBottom: "20px" }}
            gutterBottom
          >
            New User
          </Typography>
          <div className="cSignuPmainDiv">
            <Stack>
              <FormControl className="cSignuPformControl">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="cSignuPinput"
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
              <FormControl className="cSignuPformControl">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="cSignuPinput"
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
              <FormControl className="cSignuPformControl">
                <Input
                  type="text"
                  placeholder="Your Phone"
                  className="cSignuPinput"
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
              <FormControl className="cSignuPformControl">
                <Input
                  type="password"
                  placeholder="Password"
                  className="cSignuPinput"
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
              <Link href="/c/login">
                <a
                  className="cSignuPLink mt-2 textCenter fontwb"
                  style={{ color: "tomato" }}
                >
                  Already User? Login
                </a>
              </Link>
            </Stack>
          </div>
        </Fragment>
      )}
      <div style={{ height: "120px" }}></div>
    </Fragment>
  );
};

export default Signup;
