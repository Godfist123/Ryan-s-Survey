// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(200).json({ errno: -1, msg: "method not allowed" });
  }
  console.log("req.body", req.body);
  res.status(200).json({ errno: 0, msg: "success" });
}
