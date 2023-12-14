import css from "./MainForm.module.css";

import { useState } from "react";

import { FirstPage } from "./firstPage/FirstPage";
import { SecondPage } from "./secondPage/SecondPage";
import { ThirdPage } from "./thirdPage/ThirdPage";
import { FourthPage } from "./fourthPage/FourthPage";
import { FifthPage } from "./fifthPage/FifthPage";

export const MainForm = ({ onStepChange }) => {
  const [data, setData] = useState({
    gender: "",
    goal: "",
    body_type: "",
    workout: "",
    email: "",
  });

  const [currentPage, setCurrentPage] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const handleNextPage = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      setShowResult(true);
      return;
    }
    setCurrentPage((prev) => prev + 1);
    onStepChange(currentPage + 1);
  };

  const handlePrevPage = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentPage((prev) => prev - 1);
    onStepChange(currentPage - 1);
  };

  const pages = [
    <FirstPage next={handleNextPage} data={data} />,
    <SecondPage next={handleNextPage} prev={handlePrevPage} data={data} />,
    <ThirdPage next={handleNextPage} prev={handlePrevPage} data={data} />,
    <FourthPage next={handleNextPage} prev={handlePrevPage} data={data} />,
    <FifthPage next={handleNextPage} prev={handlePrevPage} data={data} />,
  ];

  return (
    <>
      {!showResult ? (
        <div className={css.container}>{pages[currentPage]}</div>
      ) : (
        <div>
          <p className={css.quiz_info}>
            Gender: {data.gender}, Goal: {data.goal}, Body type:{" "}
            {data.body_type}, Workout: {data.workout}, email: {data.email},
          </p>
        </div>
      )}
    </>
  );
};
