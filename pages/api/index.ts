import withHandler from "@libs/server/withHandler";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

interface Data {
  introduction: string;
  links: { name: string; link: string }[];
}

const Handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  return res.status(200).json({
    introduction:
      "RellyShip is a place where you can ask a question to someone, make a vote publicly to users, and even offer a popular celebrity to your program officially.",
    links: [
      {
        name: "github",
        link: "https://github.com/cattynip/rellyship/"
      },
      {
        name: "website",
        link: "https://rellyship.vercel.app/"
      }
    ]
  });
};

export default withHandler({
  method: "GET",
  handler: Handler,
  isPrivate: false
});
