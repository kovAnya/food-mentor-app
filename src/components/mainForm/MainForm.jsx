import css from "./MainForm.module.css";

import { useState } from "react";
import { Formik, Field, Form } from "formik";

import { FirstPage } from "./firstPage/FirstPage";
import { SecondPage } from "./secondPage/SecondPage";
import { ThirdPage } from "./thirdPage/ThirdPage";
import { FourthPage } from "./fourthPage/FourthPage";
import { FifthPage } from "./fifthPage/FifthPage";

export const MainForm = () => {
  const [data, setData] = useState({
    gender: "",
    goal: "",
    body_type: "",
    workout: "",
    email: "",
  });

  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      console.log("message", newData);
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentPage((prev) => prev - 1);
  };

  const pages = [
    <FirstPage next={handleNextPage} data={data} />,
    <SecondPage next={handleNextPage} prev={handlePrevPage} data={data} />,
    <ThirdPage next={handleNextPage} prev={handlePrevPage} data={data} />,
    <FourthPage next={handleNextPage} prev={handlePrevPage} data={data} />,
    <FifthPage next={handleNextPage} prev={handlePrevPage} data={data} />,
  ];

  return <div>{pages[currentPage]}</div>;
};
