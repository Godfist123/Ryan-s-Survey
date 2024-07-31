import React, { useState } from "react";
import { getQuestionStatListService } from "../../../services/stat";
import { useRequest } from "ahooks";
import { useParams } from "react-router-dom";
import { Pagination, Spin, Table } from "antd";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";

interface PageStatProps {
  selectedId: string;
  setSelectedComponentId: (id: string) => void;
  setSelectedComponentType: (type: string) => void;
}

const PageStat: React.FC<PageStatProps> = (props) => {
  const { selectedId, setSelectedComponentId, setSelectedComponentType } =
    props;
  const { id = "" } = useParams();
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { loading } = useRequest(
    async () => {
      const resp = await getQuestionStatListService(id, {
        page,
        pageSize,
      });
      return resp;
    },
    {
      refreshDeps: [id, page, pageSize],
      onSuccess: (resp) => {
        const { total, list = [] } = resp;
        setTotal(total);
        console.log("list", list);
        setList(list);
      },
    }
  );

  const { componentList } = useGetComponentInfo();
  const columns = componentList.map((item) => {
    const { fe_id, title, props = {}, type } = item;
    const colTitle = props!.title || title;

    return {
      title: (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setSelectedComponentId(fe_id);
            setSelectedComponentType(type);
          }}
        >
          <span style={{ color: fe_id === selectedId ? "#1890ff" : "inherit" }}>
            {colTitle}
          </span>
        </div>
      ),
      dataIndex: fe_id,
    };
  });

  const dataSource = list.map((item: any) => {
    return { ...item, key: item._id };
  });

  const TableElem = (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      ></Table>
      <div style={{ textAlign: "center", marginTop: "18px" }}>
        <Pagination
          total={total}
          pageSize={pageSize}
          current={page}
          onChange={(page) => setPage(page)}
          onShowSizeChange={(page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          }}
        />
      </div>
    </>
  );

  return (
    <div>
      {loading && (
        <div style={{ textAlign: "center" }}>
          <Spin />
        </div>
      )}
      {!loading && TableElem}
    </div>
  );
};

export default PageStat;
