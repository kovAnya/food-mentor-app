import { useState } from "react";

import { MainForm } from "./components/mainForm/MainForm";
import { ProgressBar } from "./components/progressBar/ProgressBar";
import { Layout } from "./components/layout/Layout";

function App() {
  const [progress, setProgress] = useState(2);

  const onStepChange = (currentPage) => {
    switch (currentPage) {
      case 0:
        setProgress(2);
        break;
      case 1:
        setProgress(25);
        break;
      case 2:
        setProgress(50);
        break;
      case 3:
        setProgress(75);
        break;
      case 4:
        setProgress(98);
        break;
      default:
        setProgress(2);
    }
  };

  return (
    <Layout>
      <ProgressBar progress={progress} />
      <MainForm onStepChange={onStepChange} />
    </Layout>
  );
}

export default App;
