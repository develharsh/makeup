import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { logOut } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import MainDrawer from "./MainDrawer";
import { SHOW_MAIN_DRAWER } from "../redux/constants/designConstants";
import SendNotif from "../utils/SendNotif";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const handleLogout = (e) => {
    dispatch(SendNotif("info", "Logged Out."));
    dispatch(logOut());
    router.push("/");
  };
  return (
    <Fragment>
      <Fragment>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
                onClick={(e) => dispatch({ type: SHOW_MAIN_DRAWER })}
              >
                <MenuIcon color="secondary" />
              </IconButton>
              <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                <Link href="/">
                  <a className="dFlex justfystart navLogoLink">
                    <img
                      src="/logomain.png"
                      alt="..."
                      className="navLogo-1 navLogoImg"
                    />
                    <span className="navLogoSpan"></span>
                    <img
                      src="/logotxt.png"
                      alt="..."
                      className="navLogo-2 navLogoImg"
                    />
                  </a>
                </Link>
              </Typography>
              {isAuthenticated ? (
                <Button
                  color="error"
                  onClick={handleLogout}
                  variant="contained"
                >
                  Log out
                </Button>
              ) : (
                <Link href="/c/signup">
                  <a>
                    <AccountBoxIcon color="secondary" />
                  </a>
                </Link>
              )}
            </Toolbar>
          </AppBar>
          <div style={{ height: "61px" }}></div>
        </Box>
      </Fragment>
    </Fragment>
  );
};

export default NavBar;
