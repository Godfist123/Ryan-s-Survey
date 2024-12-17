// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { postAnswer } from "@/service/answer";

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(200).json({ errno: -1, msg: "method not allowed" });
  }
  const answerInfo = genAnswerInfo(req.body);

  try {
    const resData = await postAnswer(answerInfo);
    if (resData.errno === 0) {
      res.redirect("/nextjs/Success");
    } else {
      res.redirect("/nextjs/Fail");
    }
  } catch (e) {
    res.redirect("/nextjs/Fail");
  }
  //   res.status(200).json({ errno: 0, msg: "success" });
}
