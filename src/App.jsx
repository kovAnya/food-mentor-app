import { useState } from "react";

import { MainForm } from "./components/mainForm/MainForm";
import { ProgressBar } from "./components/progressBar/ProgressBar";
import { Layout } from "./components/layout/Layout";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const onStepChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <ProgressBar currentPage={currentPage} />
      <MainForm onStepChange={onStepChange} />
    </Layout>
  );
}

export default App;
