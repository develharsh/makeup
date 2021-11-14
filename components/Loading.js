import Backdrop from "@mui/material/Backdrop";
const Loading = ({ show }) => {
  //show may be undefined so used ternary ops
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={show ? true : false}
    >
      <h4 className="textCenter">
        Loading...
        <br></br>Please Wait
      </h4>
    </Backdrop>
  );
};
export default Loading;
