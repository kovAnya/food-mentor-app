import { MainForm } from "./components/mainForm/MainForm";
import { ProgressBar } from "./components/progressBar/ProgressBar";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <ProgressBar />
      <MainForm />
    </Layout>
  );
}

export default App;
