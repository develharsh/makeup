import connectDB from "../../../../utils/connectDB";
import Auth from "../../../../utils/auth";
import Service from "../../../../models/serviceModel";

connectDB();

const ServiceFunc = async (req, res) => {
  const midwr = await Auth(req.headers.authorization);
  if (midwr.success) {
    if (midwr.user.type !== "admin") {
      return res
        .status(403)
        .json({ success: false, message: "You are not allowed." });
    }
    //Verify Admin Access
  } else {
    return res.status(401).json(midwr);
  }
  switch (req.method) {
    case "POST":
      await new_Service(req, res);
      break;
  }
};

const new_Service = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(200).json({ success: true, service });
  } catch (err) {
    const message =
      err.code === 11000
        ? `${Object.values(err.keyValue)[0]} already exists.`
        : err.message;
    res.status(500).json({ success: false, message });
  }
};
export default ServiceFunc;
