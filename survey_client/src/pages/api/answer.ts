// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

function genAnswerInfo(reqBody: any) {
  let answerList: any[] = [];
  Object.keys(reqBody).forEach((key) => {
    if (key === "questionId") return;
    answerList.push({
      componentId: key,
      value: reqBody[key],
    });
  });
  return {
    questionId: reqBody.questionId || "",
    answerList,
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(200).json({ errno: -1, msg: "method not allowed" });
  }
  const answerInfo = genAnswerInfo(req.body);
  console.log("answerInfo", answerInfo);
  try {
    res.redirect("/Success");
  } catch (e) {
    res.redirect("/Fail");
  }
  //   res.status(200).json({ errno: 0, msg: "success" });
}
