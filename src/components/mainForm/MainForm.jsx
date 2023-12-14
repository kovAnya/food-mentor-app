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
    <div className={css.container}>
      {!showResult ? (
        pages[currentPage]
      ) : (
        <div className={css.quizz_answers}>
          <h1 className={css.quiz_title}>Thank you for the answers!</h1>
          <ul className={css.quiz_info}>
            {Object.entries(data).map((step) => {
              return (
                <li className={css.quiz_info_item} key={step[0]}>
                  <span className={css.answer}>{step[0]}:</span>
                  {step[1]}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
