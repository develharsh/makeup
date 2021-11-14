import Backdrop from "@mui/material/Backdrop";
const Loading = ({ show }) => {
  //show may be undefined so used ternary ops
  const handleDots = () => {
    const who = document.getElementById("dots");
    setInterval(() => {
      if (who.innerText === "...") who.innerText = "";
      who.innerText += ".";
    }, 600);
  };
  if (show) handleDots();
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={show ? true : false}
    >
      <h4 className="textCenter">
        Loading<span id="dots"></span>
        <br></br>Please Wait
      </h4>
    </Backdrop>
  );
};
export default Loading;
