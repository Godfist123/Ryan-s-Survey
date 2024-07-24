import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";
import Head from "next/head";
import styles from "./question.module.scss";

interface QuestionProps {
  id: string;
}

export default function Question(props: QuestionProps) {
  return (
    <>
      <Head>
        <title>Question</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form method="post" action="/api/answer">
          <input type="hidden" name="questionId" value={props.id} />
          <QuestionInput
            fe_id="c1"
            props={{ title: "Question", placeholder: "test" }}
          />
          <QuestionRadio
            fe_id="c2"
            props={{
              title: "Question",
              options: [
                { value: "mal", text: "male" },
                { value: "female", text: "female" },
              ],
              value: "male",
              isVertical: false,
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  return {
    props: { id },
  };
}
