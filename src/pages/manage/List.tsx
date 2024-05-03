import React, { useEffect, useRef } from "react";
import { useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import ListSearch from "../../components/ListSearch";
import styles from "./Common.module.scss";
import { LIST_PAGE_SIZE, LIST_SEARCH_PARAM_KEY } from "../../constant";
import { Empty, Spin, Typography } from "antd";
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData";
import { useSearchParams } from "react-router-dom";
import { useDebounceFn, useRequest } from "ahooks";
import { getQuestionListService } from "../../services/question";

const List: React.FC = () => {
  const { Title } = Typography;
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [start, setStart] = useState(false);
  const haveMoreData = total > list.length;
  const containRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || "";

  //reset the initial vale when searching
  useEffect(() => {
    setStart(false);
    setPage(1);
    setList([]);
    setTotal(0);
  }, [keyword]);

  const load = async () => {
    const data = await getQuestionListService({
      page,
      keyword,
      pageSize: LIST_PAGE_SIZE,
    });
    return data;
  };

  //get data from server
  const {
    run: loadPage,
    loading,
    error,
  } = useRequest(load, {
    manual: true,
    onSuccess: (resp) => {
      const { list: respList = {}, total = 0 } = resp;
      setList(list.concat(respList));
      setTotal(total);
      setPage(page + 1);
    },
  });
  //function to trigger load more
  //debounce
  const { run: tryLoadMore } = useDebounceFn(
    () => {
      const elem = containRef.current;
      if (elem == null) return;
      const domRect = elem.getBoundingClientRect();
      const { bottom } = domRect;
      if (bottom <= document.body.clientHeight) {
        loadPage();
        setStart(true);
      }
    },
    {
      wait: 500,
    }
  );

  const LoadMoreElement = () => {
    if (!start || loading) return <Spin />;
    if (total === 0) return <Empty description="Empty Data" />;
    if (!haveMoreData) return <span>No More Data</span>;
    return <span>Loading Next Page</span>;
  };

  useEffect(() => {
    tryLoadMore();
  }, [searchParams]);

  //havemoredata is false when the page is mounted for the first time
  useEffect(() => {
    if (haveMoreData) {
      window.addEventListener("scroll", tryLoadMore);
    }
    return () => {
      window.removeEventListener("scroll", tryLoadMore);
    };
  }, [searchParams, haveMoreData]);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>My Survey</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {list.length > 0 &&
          list.map((item: any) => {
            const id = item._id;
            return <QuestionCard key={id} {...item} />;
          })}
      </div>
      <div className={styles.footer}>
        <div ref={containRef}>{LoadMoreElement()}</div>
      </div>
    </div>
  );
};

export default List;
