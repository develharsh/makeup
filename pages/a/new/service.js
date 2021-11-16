import { Fragment } from "react";

import ProtectedRoute from "../../../utils/ProtectedRoute";
import MetaData from "../../../utils/MetaData";
const Service = () => {
  return (
    <Fragment>
      <MetaData title="New Service | Admin" />
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
