import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  newService,
  clearErrors,
  clearMessages,
} from "../../../redux/actions/adminActions";
import Loading from "../../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import SendNotif from "../../../utils/SendNotif";
import ProtectedRoute from "../../../utils/ProtectedRoute";
import MetaData from "../../../utils/MetaData";
import { useRouter } from "next/router";

const Service = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, message, error } = useSelector((state) => state.admin);
  useEffect(() => {
    if (error) {
      dispatch(SendNotif("error", error));
      dispatch(clearErrors());
    }

    if (message) {
      dispatch(SendNotif("success", message));
      dispatch(clearMessages());
      router.push("/a/dashboard");
    }
  }, [dispatch, error, message, router]);
  const [values, setValues] = useState({
    service_name: "",
    image: "",
  });
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setValues({ ...values, [name]: files[0] });
  };
  const { service_name, image } = values;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    if (!service_name)
      return dispatch(SendNotif("error", "Service name can't be empty."));
    if (!image) return dispatch(SendNotif("error", "Image can't be empty."));
    dispatch(newService(service_name, image));
  };
  return (
    <Fragment>
      <MetaData title="New Service | Admin" />
      <Loading show={loading} />
      <div style={{ height: "4vh" }}></div>
      <Typography
        variant="h6"
        display="block"
        sx={{ textAlign: "center", marginBottom: "20px" }}
        gutterBottom
      >
        New Service
      </Typography>
      <div className="admServiceAddmainDiv">
        <Stack>
          <FormControl className="admServiceAddformControl">
            <Input
              type="text"
              placeholder="Name of the Service"
              className="admServiceAddinput"
              name="service_name"
              value={service_name}
              onChange={(e) => handleChange(e)}
              startAdornment={
                <InputAdornment position="start">
                  <HomeRepairServiceIcon color="success" />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className="admServiceAddformControl">
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                name="image"
                type="file"
                onChange={(e) => handleFileChange(e)}
              />
              <IconButton
                color="success"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
              {image ? image.name : "Add Image"}
            </label>
          </FormControl>

          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            sx={{ marginTop: "10px" }}
            onClick={handleSubmit}
          >
            Add
          </Button>
          <Link href="/a/dashboard">
            <a>
              <Button
                variant="contained"
                color="error"
                className="mt-2"
                style={{ width: "300px" }}
              >
                Cancel
              </Button>
            </a>
          </Link>
        </Stack>
      </div>
      <div style={{ height: "120px" }}></div>
    </Fragment>
  );
};
export async function getServerSideProps(context) {
  const { req, res } = context;
  const isProtected = ProtectedRoute(req.cookies.token, "admin", "/a/login");
  if (isProtected.status) {
    return isProtected.newRoute;
  }
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default Service;
