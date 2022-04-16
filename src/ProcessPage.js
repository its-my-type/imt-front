import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

const ProcessPage = () => {
  const location = useLocation();

  useEffect(() => {
    const query = queryString.parse(location.search);
    // console.log(location);
    // console.log(location.search);
    // console.log(query);

    getData(query);
  }, []);

  const getData = async (query) => {
    const res = await fetch(
      `http://3.39.137.243/imt-v1/games/initial-images?gender=${query.gender}`
    ).then((res) => res.json());

    // const initData = res.map((i) => {
    //   return;
    // });
  };

  return (
    <>
      <h2>테스트 진행 페이지</h2>
    </>
  );
};

export default ProcessPage;
