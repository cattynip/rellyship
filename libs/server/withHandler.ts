import { NextApiHandler } from "next";

interface IWithHanlderConfiguration {
  method: TMethod;
  handler: NextApiHandler;
  isPrivate: boolean;
}

type TMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const withHandler = ({
  method,
  handler,
  isPrivate
}: IWithHanlderConfiguration): NextApiHandler => {
  return async (req, res) => {
    if (!req.method) {
      return res.status(500).end();
    }

    if (req.method !== method) {
      return res.status(405).end();
    }

    if (isPrivate) {
      if (!req.session?.user) {
        return res.status(401).json({
          ok: false,
          message: "Login"
        });
      }
    }

    try {
      handler(req, res);
    } catch (error) {
      console.error(error);
      return res.status(500).end();
    }
  };
};

export default withHandler;
