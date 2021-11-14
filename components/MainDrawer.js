import { Fragment } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch, useSelector } from "react-redux";
import { HIDE_MAIN_DRAWER } from "../redux/constants/designConstants";
import Link from "next/link";

const MainDrawer = () => {
  const dispatch = useDispatch();
  const { mainDrawer } = useSelector((state) => state.design);
  const list = () => (
    <Box
      sx={{ width: "auto", backgroundColor: "rgba(0,0,0,0.8)" }}
      role="presentation"
      onClick={(e) => {
        dispatch({ type: HIDE_MAIN_DRAWER });
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <CloseIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Close" sx={{ color: "white" }} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemIcon>
            <HomeIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <Link href="/">
            <a>
              <ListItemText primary="Home Page" sx={{ color: "white" }} />
            </a>
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <LoginIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <Link href="/c/login">
            <a>
              <ListItemText primary="Log In" sx={{ color: "white" }} />
            </a>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Fragment>
      {
        <Drawer anchor={"left"} open={mainDrawer}>
          {list()}
        </Drawer>
      }
    </Fragment>
  );
};

export default MainDrawer;
