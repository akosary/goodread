import React, { useEffect } from "react";
import Table from "./userTable.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData, updateRateOrStatus } from "Redux/userdashboard/slice";

export default function allread({ filter }) {
  const { data, isLoading, error } = useSelector((state) => state.userDashboard);
  const dispatch = useDispatch();
  const Rows = ["Book Name", "Author", "Rate", "Average Ratting", "Status"];

  const handleDataReceived = (data) => {
    dispatch(updateRateOrStatus(data));
  };
  const handleStatusData = (data) => {
    dispatch(updateRateOrStatus(data));
  };

  // const updateDashboard = (data) => {
  //   dispatch(updateRateOrStatus(data));
  // };

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Table
        DData={data}
        rows={Rows}
        filter={filter}
        onDataReceived={handleDataReceived}
        statusData={handleStatusData}
      />
    </>
  );
}
