import { useParams } from "react-router-dom";
import { getQuestionService } from "../services/question";
import { useRequest } from "ahooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetComponents } from "../store/componentSlice";
import { resetPageInfo } from "../store/pageinfoSlice";

function useLoadQuestionData() {
  const { id = "" } = useParams();
  const dispatch = useDispatch();

  const load = async (id: string) => {
    if (!id) throw new Error("no survey id");
    const data = await getQuestionService(id);
    return data;
  };

  const { data, loading, error, run } = useRequest(load, { manual: true });

  useEffect(() => {
    if (!data) return;
    const { title = "", desc, css, js, componentList = [] } = data;
    let selectedId = "";
    if (componentList.length > 0) {
      selectedId = componentList[0].fe_id;
    }
    dispatch(
      resetComponents({ componentList, selectedId, copiedComponent: null })
    );
    dispatch(resetPageInfo({ title, desc, css, js }));
  }, [data]);

  useEffect(() => {
    run(id);
  }, [id]);

  return { loading, error };
}
export default useLoadQuestionData;
