import { Fragment } from "react";
import Link from "next/link";
import ProtectedRoute from "../../../utils/ProtectedRoute";
const index = () => {
  return (
    <Fragment>
      <div style={{ minHeight: "80vh" }}>
        <Link href="/a/new/service">
          <a>Add New Service</a>
        </Link>
      </div>
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

export default index;
