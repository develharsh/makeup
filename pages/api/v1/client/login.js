import connectDB from "../../../../utils/connectDB";
import Client from "../../../../models/clientModel";

connectDB();

const Login = async (req, res) => {
  switch (req.method) {
    case "POST":
      await Login_met(req, res);
      break;
  }
};

const Login_met = async (req, res) => {
  try {
    const { ID, password } = req.body;
    let WHOM = ID.includes("@") ? { email: ID } : { phone: ID },
      user = await Client.findOne(WHOM).select("+password");
    if (!user) {
      return res
        .status(422)
        .json({ success: false, message: "No such user found." });
    }
    const isPasMatched = await user.comparePassword(password);
    if (!isPasMatched) {
      return res
        .status(422)
        .json({ success: false, message: "No such user found." });
    }
    const token = user.getJWTToken();
    res.status(200).json({ success: true, user, token });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something Went Wrong." });
  }
};

export default Login;
