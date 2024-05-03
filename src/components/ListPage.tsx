import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import {
  LIST_PAGE_SIZE,
  LIST_PAGE_SIZE_PARAM_KEY,
  LIST_PAGE_PARAM_KEY,
} from "../constant";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
type PropTypes = {
  total: number;
};

const ListPage: React.FC<PropTypes> = (props: PropTypes) => {
  const { total } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(LIST_PAGE_SIZE);
  const Navi = useNavigate();
  const { pathname } = useLocation();

  const [searchParams] = useSearchParams();
  useEffect(() => {
    const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || "") || 1;
    const pageSize =
      parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || "") ||
      LIST_PAGE_SIZE;
    setPageSize(pageSize);
    setCurrentPage(page);
  }, [searchParams]);

  //change url when page/pagesize are changing
  const pageChangeHandler = (page: number, pageSize: number) => {
    searchParams.set(LIST_PAGE_PARAM_KEY, page.toString());
    searchParams.set(LIST_PAGE_SIZE_PARAM_KEY, pageSize.toString());

    Navi({
      pathname,
      search: searchParams.toString(),
    });
  };

  return (
    <Pagination
      current={currentPage}
      pageSize={pageSize}
      total={total}
      onChange={pageChangeHandler}
    />
  );
};

export default ListPage;
