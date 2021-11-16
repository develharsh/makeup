import connectDB from "../../../../utils/connectDB";
import Admin from "../../../../models/adminModel";

connectDB();

const Signup = async (req, res) => {
  switch (req.method) {
    case "POST":
      await signup_met(req, res);
      break;
  }
};

const signup_met = async (req, res) => {
  try {
    //OPTIONASL
    req.body.addedBy = "619147613eea72a4e1c7682a";
    const user = await Admin.create(req.body);
    const token = user.getJWTToken();
    res.status(200).json({ success: true, user, token });
  } catch (err) {
    const message =
      err.code === 11000
        ? `${Object.values(err.keyValue)[0]} already exists.`
        : err.message;
    res.status(500).json({ success: false, message });
  }
};
export default Signup;
