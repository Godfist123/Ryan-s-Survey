import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "antd";
import { LIST_SEARCH_PARAM_KEY } from "../constant";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
interface ListSearchProps {
  // Define your props here
}

const { Search } = Input;

const ListSearch: React.FC<ListSearchProps> = (props) => {
  const [value, setValue] = useState("");
  const navi = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const currentVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || "";
    setValue(currentVal);
  }, [searchParams]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearch = (value: string) => {
    navi({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    });
  };

  return (
    <Search
      size="large"
      allowClear
      placeholder="Keywords"
      onSearch={handleSearch}
      onChange={handleChange}
      style={{ width: "200px" }}
      value={value}
    />
  );
};

export default ListSearch;
