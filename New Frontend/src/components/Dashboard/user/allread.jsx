import React, { useEffect, useState } from "react";

export default function allread() {
  const [data, setData] = useState([]);
  const baseURL = "http://127.0.0.1:3500";
  const nestedRoute = "/rates";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseURL}${nestedRoute}`);
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(`${baseURL}${nestedRoute}`);
      console.log(err);
    }
  };

  return (
    <>
      <h1>API Data:</h1>
      <ul>
        {data.map((item) => {
          return <li key={item._id}>{item.book}</li>;
        })}
      </ul>
    </>
  );
}
