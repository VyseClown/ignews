import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Alessandro" },
    { id: 2, name: "Amanda" },
  ];

  return response.json(users);
};
