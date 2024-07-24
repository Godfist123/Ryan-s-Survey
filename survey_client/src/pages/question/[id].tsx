import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";
import Head from "next/head";
import styles from "./question.module.scss";
import { getQuestionById } from "@/service/question";
import PageWrapper from "@/components/PageWrapper";

interface QuestionProps {
  errno: number;
  data?: {
    id: string;
    title: string;
    desc?: string;
    js?: string;
    css?: string;
    isPublished: boolean;
    isDeleted: boolean;
    componentList: any[];
  };
  msg?: string;
}

export default function Question(props: QuestionProps) {
  const { errno, data, msg = "" } = props;
  //wrong data
  if (errno !== 0) {
    return (
      <PageWrapper title="Error">
        <h1>Error!!</h1>
        <p>{msg}</p>
      </PageWrapper>
    );
  }

  const {
    id,
    title = "",
    desc = "",
    isDeleted,
    isPublished,
    componentList,
  } = data || {};
  //already deleted
  if (isDeleted) {
    return (
      <PageWrapper title="Error" desc={desc}>
        <h1>Error!!</h1>
        <p>Question is deleted</p>
      </PageWrapper>
    );
  }
  //not published
  if (!isPublished) {
    return (
      <PageWrapper title="Error" desc={desc}>
        <h1>Error!!</h1>
        <p>Question is not published</p>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper title={title} desc={desc}>
      <form method="post" action="/api/answer">
        <input type="hidden" name="questionId" value={id} />
        <QuestionInput
          fe_id="c1"
          props={{ title: "Question", placeholder: "test" }}
        />
        <QuestionRadio
          fe_id="c2"
          props={{
            title: "Question",
            options: [
              { value: "male", text: "male" },
              { value: "female", text: "female" },
            ],
            value: "male",
            isVertical: false,
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </PageWrapper>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  const data = await getQuestionById(id);
  return {
    props: { ...data },
  };
}
