import styles from "@/styles/Question.module.scss";
import { getQuestionById } from "@/service/question";
import PageWrapper from "@/components/PageWrapper";
import { getComponent } from "@/components/QuestionComponents";

interface QuestionProps {
  errno: number;
  data?: {
    _id: string;
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
    _id,
    title = "",
    desc = "",
    isDeleted,
    isPublished,
    componentList,
  } = data || {};
  console.log(data);
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

  const ComponentListElem = (
    <>
      {componentList?.map((c) => {
        const ComponentElem = getComponent(c);
        return (
          <div key={c.fe_id} className={styles.componentWrapper}>
            {ComponentElem}
          </div>
        );
      })}
    </>
  );

  return (
    <PageWrapper title={title} desc={desc}>
      <form method="post" action="/api/answer">
        <input type="hidden" name="questionId" value={_id} />
        {ComponentListElem}
        <div className={styles.submitBtnContainer}>
          <button type="submit">Submit</button>
        </div>
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
