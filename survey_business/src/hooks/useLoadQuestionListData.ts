import { useSearchParams } from "react-router-dom";
import { getQuestionListService } from "../services/question";
import { useRequest } from "ahooks";
import {
  LIST_SEARCH_PARAM_KEY,
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE_PARAM_KEY,
  LIST_PAGE_SIZE,
} from "../constant";

type optionType = {
  isStar: boolean;
  isDeleted: boolean;
};

function useLoadQuestionListData(opt: Partial<optionType> = {}) {
  const { isStar, isDeleted } = opt;
  const [searchParams] = useSearchParams();
  async function load() {
    const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || "";
    const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || "") || 1;
    const pageSize =
      parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || "") ||
      LIST_PAGE_SIZE;

    const data = await getQuestionListService({
      keyword,
      isStar,
      isDeleted,
      page,
      pageSize,
    });
    return data;
  }
  const { data, loading, error, refresh } = useRequest(load, {
    refreshDeps: [searchParams],
  });
  return { data, loading, error, refresh };
}

export default useLoadQuestionListData;
