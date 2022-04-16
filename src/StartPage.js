import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <>
      <Link to="/processpage?gender=FEMALE&cake=choco">
        <button>여자</button>
      </Link>
      <Link to="/processpage?gender=MALE">
        <button>남자</button>
      </Link>
    </>
  );
};

export default StartPage;
