const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");
const Client = require("../models/clientModel.js");
//const Partner = require("../models/partnerModel.js");

const Auth = async (token) => {
  if (!token || token === "undefined") {
    return { success: false };
  }
  let decodedData = null,
    user = null;
  try {
    decodedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (err) {
    return { success: false };
  }

  if (decodedData.type === "admin") {
    user = await Admin.findById(decodedData.id);
  } else if (decodedData.type === "client") {
    user = await Client.findById(decodedData.id);
  } else if (decodedData.type === "partner") {
    //req.user = await Partner.findById(decodedData.id);
  }
  if (!user) return { success: false };
  return { success: true, user };
};
export default Auth;
