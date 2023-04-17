import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiHandler } from "next";

const cookieOptions = {
  cookieName: process.env.SESSION_NAME,
  password: process.env.SESSION_PASSWORD,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production"
  }
};

const withSession = (fn: any): NextApiHandler => {
  return withIronSessionApiRoute(fn, cookieOptions);
};

export default withSession;
